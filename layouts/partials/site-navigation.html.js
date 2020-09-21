
<div class="bg-black-70 rounded-borders topnav" id="navigationmenu">
    <a href="{{ .Site.Home.RelPermalink }}" class="f3 fw2 hover-white no-underline white-90 dib">
      {{ with .Site.Params.site_logo }}
        <img src="{{ . }}" class="w100 mw5-ns" alt="{{ $.Site.Title }}" />
      {{ else }}
        {{ .Site.Title }}
      {{ end }}
    </a>

      {{ partial "i18nlist.html" . }}
      {{ if .Site.Menus.main }}
          {{ range .Site.Menus.main }}
            <a class="hover-yellow white no-underline " href="{{ .URL }}" title="{{ .Name }}">
              {{ .Name }}
            </a>
          {{ end }}
      {{ end }}
      {{ partialCached "social-follow.html" . }}
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <img src="/images/icons/hamburger.svg"></img>
  </a>
</div>
	
