import './globals.css'
import { ReactNode } from 'react'
import Script from 'next/script'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <body>
        {children}

        {/* Tradetracker SuperTag script */}
        <Script id="tradetracker-super" strategy="afterInteractive">
          {`
            var _TradeTrackerTagOptions = {
              t: 'a',
              s: '511747',
              chk: '9de49f35c2a4d89e0f05163ff657efb4',
              overrideOptions: {}
            };
            (function() {
              var tt = document.createElement('script'), 
                  s = document.getElementsByTagName('script')[0];
              tt.setAttribute('type', 'text/javascript');
              tt.setAttribute('src', (document.location.protocol == 'https:' ? 'https' : 'http') + 
                '://tm.tradetracker.net/tag?t=' + _TradeTrackerTagOptions.t + 
                '&s=' + _TradeTrackerTagOptions.s + 
                '&chk=' + _TradeTrackerTagOptions.chk);
              s.parentNode.insertBefore(tt, s);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
