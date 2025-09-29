import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Settings {
  whatsapp_number: string;
  whatsapp_display: string;
  contact_phone: string;
  contact_phone_display: string;
  contact_email: string;
  instagram_handle: string;
  instagram_url: string;
  atendimento_rapido_instagram: string;
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
          .in('key', [
            'whatsapp_number', 
            'whatsapp_display', 
            'contact_phone', 
            'contact_phone_display',
            'contact_email',
            'instagram_handle',
            'instagram_url',
            'atendimento_rapido_instagram'
          ]);

        if (error) throw error;

        const settingsMap: Record<string, string> = {};
        data?.forEach(item => {
          settingsMap[item.key] = item.value;
        });

        setSettings({
          whatsapp_number: settingsMap.whatsapp_number || '+5513981038883',
          whatsapp_display: settingsMap.whatsapp_display || '(13) 98103 8883',
          contact_phone: settingsMap.contact_phone || '+5513981038883',
          contact_phone_display: settingsMap.contact_phone_display || '(13) 98103 8883',
          contact_email: settingsMap.contact_email || 'opperstoreofc@gmail.com',
          instagram_handle: settingsMap.instagram_handle || '@opperx.ofc',
          instagram_url: settingsMap.instagram_url || 'https://instagram.com/opperx.ofc',
          atendimento_rapido_instagram: settingsMap.atendimento_rapido_instagram || 'https://instagram.com/opperx.ofc'
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch settings');
        // Fallback to default values
        setSettings({
          whatsapp_number: '+5513981038883',
          whatsapp_display: '(13) 98103 8883',
          contact_phone: '+5513981038883',
          contact_phone_display: '(13) 98103 8883',
          contact_email: 'opperstoreofc@gmail.com',
          instagram_handle: '@opperx.ofc',
          instagram_url: 'https://instagram.com/opperx.ofc',
          atendimento_rapido_instagram: 'https://instagram.com/opperx.ofc'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading, error };
};