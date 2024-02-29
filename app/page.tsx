import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';
import LanguageSwitcher from '@/components/language-switch';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <LanguageSwitcher />
      <main className='w-screen h-screen flex'>
        <div className='min-w-96 mx-auto my-auto'>
          <Command className='rounded-lg border shadow-md'>
            <CommandInput placeholder={t('command-placeholder')} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading={t('suggestions')}>
                <CommandItem>
                  <Calendar className='me-2 h-4 w-4' />
                  <span>{t('calendar')}</span>
                </CommandItem>
                <CommandItem>
                  <Smile className='me-2 h-4 w-4' />
                  <span>{t('search-emoji')}</span>
                </CommandItem>
                <CommandItem>
                  <Calculator className='me-2 h-4 w-4' />
                  <span>{t('calculator')}</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading={t('settings')}>
                <CommandItem>
                  <User className='me-2 h-4 w-4' />
                  <span>{t('profile')}</span>
                  <CommandShortcut>{t('cmd-p')}</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className='me-2 h-4 w-4' />
                  <span>{t('billing')}</span>
                  <CommandShortcut>{t('cmd-b')}</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className='me-2 h-4 w-4' />
                  <span>{t('settings')}</span>
                  <CommandShortcut>{t('cmd-s')}</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </main>
    </div>
  );
}
