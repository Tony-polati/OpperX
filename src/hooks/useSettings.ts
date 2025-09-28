import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Settings {
  contact_phone: string;
  instagram: string;
  instagram_url: string;
}

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data, error } = await supabase
          .from('settings')
          .select('key, value')
          .in('key', ['contact_phone', 'instagram', 'instagram_url']);

        if (error) throw error;

        const settingsMap: Record<string, string> = {};
        data?.forEach(item => {
          settingsMap[item.key] = item.value;
        });

        setSettings({
          contact_phone: settingsMap.contact_phone || '+5513981038883',
          instagram: settingsMap.instagram || '@opper.ofc',
          instagram_url: settingsMap.instagram_url || 'https://instagram.com/opper.ofc'
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch settings');
        // Fallback to default values
        setSettings({
          contact_phone: '+5513981038883',
          instagram: '@opper.ofc',
          instagram_url: 'https://instagram.com/opper.ofc'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading, error };
};