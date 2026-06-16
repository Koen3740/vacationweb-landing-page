<html lang="nl">
  <body>
    {children}
    
    {/* Tradetracker SuperTag script */}
    <script type="text/javascript">
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
    </script>
  </body>
</html>
