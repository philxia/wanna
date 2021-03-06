




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>csg.js/csg.js at master · evanw/csg.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="evanw/csg.js" name="twitter:title" /><meta content="csg.js - Constructive solid geometry on meshes using BSP trees in JavaScript" name="twitter:description" /><meta content="https://avatars.githubusercontent.com/u/406394" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars.githubusercontent.com/u/406394" property="og:image" /><meta content="evanw/csg.js" property="og:title" /><meta content="https://github.com/evanw/csg.js" property="og:url" /><meta content="csg.js - Constructive solid geometry on meshes using BSP trees in JavaScript" property="og:description" />

    <meta name="hostname" content="github-fe139-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="74EAE461:5224:E974DD:530DFB0E" name="octolytics-dimension-request_id" /><meta content="2163604" name="octolytics-actor-id" /><meta content="philxia" name="octolytics-actor-login" /><meta content="302509623177271c8ce82e8ad84c21f92a4f6c48e4aa275791ac41120f7fc00f" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="s406yGiU1wdBGw1YG1IC3lLfQrXE8WQPvmvGlpVR4ns=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-99f0c420247f036251131234f2df1eaaf2ddb386.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-c1671115cdd7e4b44317ecd428238f073c37dbc0.css" media="all" rel="stylesheet" type="text/css" />
    
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-01ab94ef47d6293597922a1fab60e274e1d8f37e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-4080dfd1919155cf72a9b56c3bf746e67b898aa6.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="285f2c751e45e1751b37093c33d9affd">

        <link data-pjax-transient rel='permalink' href='/evanw/csg.js/blob/a8512afbac3cf503195870f7ef11c0a32f36c6d4/csg.js'>

  <meta name="description" content="csg.js - Constructive solid geometry on meshes using BSP trees in JavaScript" />

  <meta content="406394" name="octolytics-dimension-user_id" /><meta content="evanw" name="octolytics-dimension-user_login" /><meta content="2885939" name="octolytics-dimension-repository_id" /><meta content="evanw/csg.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2885939" name="octolytics-dimension-repository_network_root_id" /><meta content="evanw/csg.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/evanw/csg.js/commits/master.atom" rel="alternate" title="Recent Commits to csg.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob tipsy-tooltips">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="philxia"
      data-repo="evanw/csg.js"
      data-branch="master"
      data-sha="8e9cc6e885ebfd04d5cd4f0e66cc151deff34bc5"
  >

    <input type="hidden" name="nwo" value="evanw/csg.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/philxia" class="name">
        <img alt="philxia" class=" js-avatar" data-user="2163604" height="20" src="https://avatars.githubusercontent.com/u/2163604" width="20" /> philxia
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="evanw/csg.js">This repository</span>
    </li>
      <li>
        <a href="/evanw/csg.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="s406yGiU1wdBGw1YG1IC3lLfQrXE8WQPvmvGlpVR4ns=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2885939" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/evanw/csg.js/watchers">
        25
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container on">
    <a href="/evanw/csg.js/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/evanw/csg.js/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/evanw/csg.js/stargazers">
        530
      </a>
  </div>

  </li>


        <li>
          <a href="/evanw/csg.js/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/evanw/csg.js/network" class="social-count">63</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/evanw" class="url fn" itemprop="url" rel="author"><span itemprop="title">evanw</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/evanw/csg.js" class="js-current-repository js-repo-home-link">csg.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/evanw/csg.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /evanw/csg.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/evanw/csg.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /evanw/csg.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>5</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/evanw/csg.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /evanw/csg.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/evanw/csg.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /evanw/csg.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/evanw/csg.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /evanw/csg.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/evanw/csg.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /evanw/csg.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/evanw/csg.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /evanw/csg.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/evanw/csg.js.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/evanw/csg.js.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:evanw/csg.js.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:evanw/csg.js.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/evanw/csg.js" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/evanw/csg.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/evanw/csg.js" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/evanw/csg.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:09db2f7135646ca51c5949d739e3fb1d -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/evanw/csg.js/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/evanw/csg.js/blob/gh-pages/csg.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/evanw/csg.js/blob/master/csg.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/evanw/csg.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">csg.js</span></a></span></span><span class="separator"> / </span><strong class="final-path">csg.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="csg.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Evan Wallace" class="main-avatar js-avatar" data-user="406394" height="24" src="https://2.gravatar.com/avatar/db7cdc9833cff457df70310949f9b610?d=https%3A%2F%2Fidenticons.github.com%2Ff7fbc13689ac43ebd06bc979e3761282.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/evanw" rel="author">evanw</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2011-12-15T01:52:55-08:00" title="2011-12-15 01:52:55">December 15, 2011</time>
    <div class="commit-title">
        <a href="/evanw/csg.js/commit/a2ddcb99e6273177413b587eb0afb91292063685" class="message" data-pjax="true" title="merged cube and cuboid">merged cube and cuboid</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Evan Wallace" class=" js-avatar" data-user="406394" height="24" src="https://2.gravatar.com/avatar/db7cdc9833cff457df70310949f9b610?d=https%3A%2F%2Fidenticons.github.com%2Ff7fbc13689ac43ebd06bc979e3761282.png&amp;r=x&amp;s=140" width="24" />
            <a href="/evanw">evanw</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>596 lines (538 sloc)</span>
          <span class="meta-divider"></span>
        <span>18.659 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/evanw/csg.js?branch=master&amp;filepath=csg.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/evanw/csg.js/edit/master/csg.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/evanw/csg.js/raw/master/csg.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/evanw/csg.js/blame/master/csg.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/evanw/csg.js/commits/master/csg.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped tooltipped-s"
             href="/evanw/csg.js/delete/master/csg.js"
             aria-label="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">// Constructive Solid Geometry (CSG) is a modeling technique that uses Boolean</span></div><div class='line' id='LC2'><span class="c1">// operations like union and intersection to combine 3D solids. This library</span></div><div class='line' id='LC3'><span class="c1">// implements CSG operations on meshes elegantly and concisely using BSP trees,</span></div><div class='line' id='LC4'><span class="c1">// and is meant to serve as an easily understandable implementation of the</span></div><div class='line' id='LC5'><span class="c1">// algorithm. All edge cases involving overlapping coplanar polygons in both</span></div><div class='line' id='LC6'><span class="c1">// solids are correctly handled.</span></div><div class='line' id='LC7'><span class="c1">// </span></div><div class='line' id='LC8'><span class="c1">// Example usage:</span></div><div class='line' id='LC9'><span class="c1">// </span></div><div class='line' id='LC10'><span class="c1">//     var cube = CSG.cube();</span></div><div class='line' id='LC11'><span class="c1">//     var sphere = CSG.sphere({ radius: 1.3 });</span></div><div class='line' id='LC12'><span class="c1">//     var polygons = cube.subtract(sphere).toPolygons();</span></div><div class='line' id='LC13'><span class="c1">// </span></div><div class='line' id='LC14'><span class="c1">// ## Implementation Details</span></div><div class='line' id='LC15'><span class="c1">// </span></div><div class='line' id='LC16'><span class="c1">// All CSG operations are implemented in terms of two functions, `clipTo()` and</span></div><div class='line' id='LC17'><span class="c1">// `invert()`, which remove parts of a BSP tree inside another BSP tree and swap</span></div><div class='line' id='LC18'><span class="c1">// solid and empty space, respectively. To find the union of `a` and `b`, we</span></div><div class='line' id='LC19'><span class="c1">// want to remove everything in `a` inside `b` and everything in `b` inside `a`,</span></div><div class='line' id='LC20'><span class="c1">// then combine polygons from `a` and `b` into one solid:</span></div><div class='line' id='LC21'><span class="c1">// </span></div><div class='line' id='LC22'><span class="c1">//     a.clipTo(b);</span></div><div class='line' id='LC23'><span class="c1">//     b.clipTo(a);</span></div><div class='line' id='LC24'><span class="c1">//     a.build(b.allPolygons());</span></div><div class='line' id='LC25'><span class="c1">// </span></div><div class='line' id='LC26'><span class="c1">// The only tricky part is handling overlapping coplanar polygons in both trees.</span></div><div class='line' id='LC27'><span class="c1">// The code above keeps both copies, but we need to keep them in one tree and</span></div><div class='line' id='LC28'><span class="c1">// remove them in the other tree. To remove them from `b` we can clip the</span></div><div class='line' id='LC29'><span class="c1">// inverse of `b` against `a`. The code for union now looks like this:</span></div><div class='line' id='LC30'><span class="c1">// </span></div><div class='line' id='LC31'><span class="c1">//     a.clipTo(b);</span></div><div class='line' id='LC32'><span class="c1">//     b.clipTo(a);</span></div><div class='line' id='LC33'><span class="c1">//     b.invert();</span></div><div class='line' id='LC34'><span class="c1">//     b.clipTo(a);</span></div><div class='line' id='LC35'><span class="c1">//     b.invert();</span></div><div class='line' id='LC36'><span class="c1">//     a.build(b.allPolygons());</span></div><div class='line' id='LC37'><span class="c1">// </span></div><div class='line' id='LC38'><span class="c1">// Subtraction and intersection naturally follow from set operations. If</span></div><div class='line' id='LC39'><span class="c1">// union is `A | B`, subtraction is `A - B = ~(~A | B)` and intersection is</span></div><div class='line' id='LC40'><span class="c1">// `A &amp; B = ~(~A | ~B)` where `~` is the complement operator.</span></div><div class='line' id='LC41'><span class="c1">// </span></div><div class='line' id='LC42'><span class="c1">// ## License</span></div><div class='line' id='LC43'><span class="c1">// </span></div><div class='line' id='LC44'><span class="c1">// Copyright (c) 2011 Evan Wallace (http://madebyevan.com/), under the MIT license.</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'><span class="c1">// # class CSG</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'><span class="c1">// Holds a binary space partition tree representing a 3D solid. Two solids can</span></div><div class='line' id='LC49'><span class="c1">// be combined using the `union()`, `subtract()`, and `intersect()` methods.</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'><span class="nx">CSG</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">polygons</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC53'><span class="p">};</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'><span class="c1">// Construct a CSG solid from a list of `CSG.Polygon` instances.</span></div><div class='line' id='LC56'><span class="nx">CSG</span><span class="p">.</span><span class="nx">fromPolygons</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">polygons</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">csg</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">();</span></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="nx">csg</span><span class="p">.</span><span class="nx">polygons</span> <span class="o">=</span> <span class="nx">polygons</span><span class="p">;</span></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">csg</span><span class="p">;</span></div><div class='line' id='LC60'><span class="p">};</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'><span class="nx">CSG</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC63'>&nbsp;&nbsp;<span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">csg</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">();</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">csg</span><span class="p">.</span><span class="nx">polygons</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">polygons</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">p</span><span class="p">.</span><span class="nx">clone</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">csg</span><span class="p">;</span></div><div class='line' id='LC67'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>&nbsp;&nbsp;<span class="nx">toPolygons</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">polygons</span><span class="p">;</span></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="c1">// Return a new CSG solid representing space in either this solid or in the</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="c1">// solid `csg`. Neither this solid nor the solid `csg` are modified.</span></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="c1">//     A.union(B)</span></div><div class='line' id='LC77'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC78'>&nbsp;&nbsp;<span class="c1">//     +-------+            +-------+</span></div><div class='line' id='LC79'>&nbsp;&nbsp;<span class="c1">//     |       |            |       |</span></div><div class='line' id='LC80'>&nbsp;&nbsp;<span class="c1">//     |   A   |            |       |</span></div><div class='line' id='LC81'>&nbsp;&nbsp;<span class="c1">//     |    +--+----+   =   |       +----+</span></div><div class='line' id='LC82'>&nbsp;&nbsp;<span class="c1">//     +----+--+    |       +----+       |</span></div><div class='line' id='LC83'>&nbsp;&nbsp;<span class="c1">//          |   B   |            |       |</span></div><div class='line' id='LC84'>&nbsp;&nbsp;<span class="c1">//          |       |            |       |</span></div><div class='line' id='LC85'>&nbsp;&nbsp;<span class="c1">//          +-------+            +-------+</span></div><div class='line' id='LC86'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC87'>&nbsp;&nbsp;<span class="nx">union</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">csg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">polygons</span><span class="p">);</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span><span class="p">(</span><span class="nx">csg</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">polygons</span><span class="p">);</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">build</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">allPolygons</span><span class="p">());</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">fromPolygons</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">allPolygons</span><span class="p">());</span></div><div class='line' id='LC97'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>&nbsp;&nbsp;<span class="c1">// Return a new CSG solid representing space in this solid but not in the</span></div><div class='line' id='LC100'>&nbsp;&nbsp;<span class="c1">// solid `csg`. Neither this solid nor the solid `csg` are modified.</span></div><div class='line' id='LC101'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC102'>&nbsp;&nbsp;<span class="c1">//     A.subtract(B)</span></div><div class='line' id='LC103'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC104'>&nbsp;&nbsp;<span class="c1">//     +-------+            +-------+</span></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="c1">//     |       |            |       |</span></div><div class='line' id='LC106'>&nbsp;&nbsp;<span class="c1">//     |   A   |            |       |</span></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="c1">//     |    +--+----+   =   |    +--+</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="c1">//     +----+--+    |       +----+</span></div><div class='line' id='LC109'>&nbsp;&nbsp;<span class="c1">//          |   B   |</span></div><div class='line' id='LC110'>&nbsp;&nbsp;<span class="c1">//          |       |</span></div><div class='line' id='LC111'>&nbsp;&nbsp;<span class="c1">//          +-------+</span></div><div class='line' id='LC112'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="nx">subtract</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">csg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">polygons</span><span class="p">);</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span><span class="p">(</span><span class="nx">csg</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">polygons</span><span class="p">);</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">build</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">allPolygons</span><span class="p">());</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">fromPolygons</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">allPolygons</span><span class="p">());</span></div><div class='line' id='LC125'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>&nbsp;&nbsp;<span class="c1">// Return a new CSG solid representing space both this solid and in the</span></div><div class='line' id='LC128'>&nbsp;&nbsp;<span class="c1">// solid `csg`. Neither this solid nor the solid `csg` are modified.</span></div><div class='line' id='LC129'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="c1">//     A.intersect(B)</span></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC132'>&nbsp;&nbsp;<span class="c1">//     +-------+</span></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="c1">//     |       |</span></div><div class='line' id='LC134'>&nbsp;&nbsp;<span class="c1">//     |   A   |</span></div><div class='line' id='LC135'>&nbsp;&nbsp;<span class="c1">//     |    +--+----+   =   +--+</span></div><div class='line' id='LC136'>&nbsp;&nbsp;<span class="c1">//     +----+--+    |       +--+</span></div><div class='line' id='LC137'>&nbsp;&nbsp;<span class="c1">//          |   B   |</span></div><div class='line' id='LC138'>&nbsp;&nbsp;<span class="c1">//          |       |</span></div><div class='line' id='LC139'>&nbsp;&nbsp;<span class="c1">//          +-------+</span></div><div class='line' id='LC140'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC141'>&nbsp;&nbsp;<span class="nx">intersect</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">csg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">polygons</span><span class="p">);</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span><span class="p">(</span><span class="nx">csg</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">polygons</span><span class="p">);</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">build</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">allPolygons</span><span class="p">());</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">fromPolygons</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">allPolygons</span><span class="p">());</span></div><div class='line' id='LC152'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>&nbsp;&nbsp;<span class="c1">// Return a new CSG solid with solid and empty space switched. This solid is</span></div><div class='line' id='LC155'>&nbsp;&nbsp;<span class="c1">// not modified.</span></div><div class='line' id='LC156'>&nbsp;&nbsp;<span class="nx">inverse</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">csg</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">clone</span><span class="p">();</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">csg</span><span class="p">.</span><span class="nx">polygons</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="p">{</span> <span class="nx">p</span><span class="p">.</span><span class="nx">flip</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">csg</span><span class="p">;</span></div><div class='line' id='LC160'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC161'><span class="p">};</span></div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'><span class="c1">// Construct an axis-aligned solid cuboid. Optional parameters are `center` and</span></div><div class='line' id='LC164'><span class="c1">// `radius`, which default to `[0, 0, 0]` and `[1, 1, 1]`. The radius can be</span></div><div class='line' id='LC165'><span class="c1">// specified using a single number or a list of three numbers, one for each axis.</span></div><div class='line' id='LC166'><span class="c1">// </span></div><div class='line' id='LC167'><span class="c1">// Example code:</span></div><div class='line' id='LC168'><span class="c1">// </span></div><div class='line' id='LC169'><span class="c1">//     var cube = CSG.cube({</span></div><div class='line' id='LC170'><span class="c1">//       center: [0, 0, 0],</span></div><div class='line' id='LC171'><span class="c1">//       radius: 1</span></div><div class='line' id='LC172'><span class="c1">//     });</span></div><div class='line' id='LC173'><span class="nx">CSG</span><span class="p">.</span><span class="nx">cube</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC175'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span> <span class="o">||</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC176'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">radius</span> <span class="o">?</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">]</span> <span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">radius</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">radius</span> <span class="o">:</span> <span class="p">[</span><span class="nx">options</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">radius</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">radius</span><span class="p">];</span></div><div class='line' id='LC178'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">fromPolygons</span><span class="p">([</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">2</span><span class="p">],</span> <span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">]],</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">5</span><span class="p">],</span> <span class="p">[</span><span class="o">+</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">]],</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">4</span><span class="p">],</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">]],</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">3</span><span class="p">],</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="o">+</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">]],</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">]],</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[[</span><span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">6</span><span class="p">],</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="o">+</span><span class="mi">1</span><span class="p">]]</span></div><div class='line' id='LC185'>&nbsp;&nbsp;<span class="p">].</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">info</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Polygon</span><span class="p">(</span><span class="nx">info</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pos</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">r</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="o">!!</span><span class="p">(</span><span class="nx">i</span> <span class="o">&amp;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">),</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">r</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="o">!!</span><span class="p">(</span><span class="nx">i</span> <span class="o">&amp;</span> <span class="mi">2</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">),</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span><span class="p">.</span><span class="nx">z</span> <span class="o">+</span> <span class="nx">r</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">*</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="o">!!</span><span class="p">(</span><span class="nx">i</span> <span class="o">&amp;</span> <span class="mi">4</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vertex</span><span class="p">(</span><span class="nx">pos</span><span class="p">,</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="nx">info</span><span class="p">[</span><span class="mi">1</span><span class="p">]));</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}));</span></div><div class='line' id='LC194'>&nbsp;&nbsp;<span class="p">}));</span></div><div class='line' id='LC195'><span class="p">};</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'><span class="c1">// Construct a solid sphere. Optional parameters are `center`, `radius`,</span></div><div class='line' id='LC198'><span class="c1">// `slices`, and `stacks`, which default to `[0, 0, 0]`, `1`, `16`, and `8`.</span></div><div class='line' id='LC199'><span class="c1">// The `slices` and `stacks` parameters control the tessellation along the</span></div><div class='line' id='LC200'><span class="c1">// longitude and latitude directions.</span></div><div class='line' id='LC201'><span class="c1">// </span></div><div class='line' id='LC202'><span class="c1">// Example usage:</span></div><div class='line' id='LC203'><span class="c1">// </span></div><div class='line' id='LC204'><span class="c1">//     var sphere = CSG.sphere({</span></div><div class='line' id='LC205'><span class="c1">//       center: [0, 0, 0],</span></div><div class='line' id='LC206'><span class="c1">//       radius: 1,</span></div><div class='line' id='LC207'><span class="c1">//       slices: 16,</span></div><div class='line' id='LC208'><span class="c1">//       stacks: 8</span></div><div class='line' id='LC209'><span class="c1">//     });</span></div><div class='line' id='LC210'><span class="nx">CSG</span><span class="p">.</span><span class="nx">sphere</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC211'>&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC212'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">center</span> <span class="o">||</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC213'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">radius</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC214'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">slices</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">slices</span> <span class="o">||</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">stacks</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">stacks</span> <span class="o">||</span> <span class="mi">8</span><span class="p">;</span></div><div class='line' id='LC216'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">polygons</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">vertices</span><span class="p">;</span></div><div class='line' id='LC217'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">vertex</span><span class="p">(</span><span class="nx">theta</span><span class="p">,</span> <span class="nx">phi</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">theta</span> <span class="o">*=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">phi</span> <span class="o">*=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">;</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dir</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="nx">theta</span><span class="p">)</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">phi</span><span class="p">),</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="nx">phi</span><span class="p">),</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">theta</span><span class="p">)</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">phi</span><span class="p">)</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">vertices</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vertex</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">plus</span><span class="p">(</span><span class="nx">dir</span><span class="p">.</span><span class="nx">times</span><span class="p">(</span><span class="nx">r</span><span class="p">)),</span> <span class="nx">dir</span><span class="p">));</span></div><div class='line' id='LC226'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">slices</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">stacks</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">vertices</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">vertex</span><span class="p">(</span><span class="nx">i</span> <span class="o">/</span> <span class="nx">slices</span><span class="p">,</span> <span class="nx">j</span> <span class="o">/</span> <span class="nx">stacks</span><span class="p">);</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">j</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">vertex</span><span class="p">((</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="nx">slices</span><span class="p">,</span> <span class="nx">j</span> <span class="o">/</span> <span class="nx">stacks</span><span class="p">);</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">stacks</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="nx">vertex</span><span class="p">((</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="nx">slices</span><span class="p">,</span> <span class="p">(</span><span class="nx">j</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="nx">stacks</span><span class="p">);</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">vertex</span><span class="p">(</span><span class="nx">i</span> <span class="o">/</span> <span class="nx">slices</span><span class="p">,</span> <span class="p">(</span><span class="nx">j</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="nx">stacks</span><span class="p">);</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">polygons</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Polygon</span><span class="p">(</span><span class="nx">vertices</span><span class="p">));</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC236'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC237'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">fromPolygons</span><span class="p">(</span><span class="nx">polygons</span><span class="p">);</span></div><div class='line' id='LC238'><span class="p">};</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'><span class="c1">// Construct a solid cylinder. Optional parameters are `start`, `end`,</span></div><div class='line' id='LC241'><span class="c1">// `radius`, and `slices`, which default to `[0, -1, 0]`, `[0, 1, 0]`, `1`, and</span></div><div class='line' id='LC242'><span class="c1">// `16`. The `slices` parameter controls the tessellation.</span></div><div class='line' id='LC243'><span class="c1">// </span></div><div class='line' id='LC244'><span class="c1">// Example usage:</span></div><div class='line' id='LC245'><span class="c1">// </span></div><div class='line' id='LC246'><span class="c1">//     var cylinder = CSG.cylinder({</span></div><div class='line' id='LC247'><span class="c1">//       start: [0, -1, 0],</span></div><div class='line' id='LC248'><span class="c1">//       end: [0, 1, 0],</span></div><div class='line' id='LC249'><span class="c1">//       radius: 1,</span></div><div class='line' id='LC250'><span class="c1">//       slices: 16</span></div><div class='line' id='LC251'><span class="c1">//     });</span></div><div class='line' id='LC252'><span class="nx">CSG</span><span class="p">.</span><span class="nx">cylinder</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC254'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">start</span> <span class="o">||</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC255'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">end</span> <span class="o">||</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC256'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ray</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">minus</span><span class="p">(</span><span class="nx">s</span><span class="p">);</span></div><div class='line' id='LC257'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">radius</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC258'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">slices</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">slices</span> <span class="o">||</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC259'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">axisZ</span> <span class="o">=</span> <span class="nx">ray</span><span class="p">.</span><span class="nx">unit</span><span class="p">(),</span> <span class="nx">isY</span> <span class="o">=</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">axisZ</span><span class="p">.</span><span class="nx">y</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mf">0.5</span><span class="p">);</span></div><div class='line' id='LC260'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">axisX</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="nx">isY</span><span class="p">,</span> <span class="o">!</span><span class="nx">isY</span><span class="p">,</span> <span class="mi">0</span><span class="p">).</span><span class="nx">cross</span><span class="p">(</span><span class="nx">axisZ</span><span class="p">).</span><span class="nx">unit</span><span class="p">();</span></div><div class='line' id='LC261'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">axisY</span> <span class="o">=</span> <span class="nx">axisX</span><span class="p">.</span><span class="nx">cross</span><span class="p">(</span><span class="nx">axisZ</span><span class="p">).</span><span class="nx">unit</span><span class="p">();</span></div><div class='line' id='LC262'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">start</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vertex</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span> <span class="nx">axisZ</span><span class="p">.</span><span class="nx">negated</span><span class="p">());</span></div><div class='line' id='LC263'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">end</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vertex</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">axisZ</span><span class="p">.</span><span class="nx">unit</span><span class="p">());</span></div><div class='line' id='LC264'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">polygons</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC265'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">point</span><span class="p">(</span><span class="nx">stack</span><span class="p">,</span> <span class="nx">slice</span><span class="p">,</span> <span class="nx">normalBlend</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">angle</span> <span class="o">=</span> <span class="nx">slice</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">out</span> <span class="o">=</span> <span class="nx">axisX</span><span class="p">.</span><span class="nx">times</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="nx">angle</span><span class="p">)).</span><span class="nx">plus</span><span class="p">(</span><span class="nx">axisY</span><span class="p">.</span><span class="nx">times</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">angle</span><span class="p">)));</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pos</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">plus</span><span class="p">(</span><span class="nx">ray</span><span class="p">.</span><span class="nx">times</span><span class="p">(</span><span class="nx">stack</span><span class="p">)).</span><span class="nx">plus</span><span class="p">(</span><span class="nx">out</span><span class="p">.</span><span class="nx">times</span><span class="p">(</span><span class="nx">r</span><span class="p">));</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">normal</span> <span class="o">=</span> <span class="nx">out</span><span class="p">.</span><span class="nx">times</span><span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">normalBlend</span><span class="p">)).</span><span class="nx">plus</span><span class="p">(</span><span class="nx">axisZ</span><span class="p">.</span><span class="nx">times</span><span class="p">(</span><span class="nx">normalBlend</span><span class="p">));</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vertex</span><span class="p">(</span><span class="nx">pos</span><span class="p">,</span> <span class="nx">normal</span><span class="p">);</span></div><div class='line' id='LC271'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC272'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">slices</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">t0</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">/</span> <span class="nx">slices</span><span class="p">,</span> <span class="nx">t1</span> <span class="o">=</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="nx">slices</span><span class="p">;</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">polygons</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Polygon</span><span class="p">([</span><span class="nx">start</span><span class="p">,</span> <span class="nx">point</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">t0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">),</span> <span class="nx">point</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">t1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">)]));</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">polygons</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Polygon</span><span class="p">([</span><span class="nx">point</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">t1</span><span class="p">,</span> <span class="mi">0</span><span class="p">),</span> <span class="nx">point</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">t0</span><span class="p">,</span> <span class="mi">0</span><span class="p">),</span> <span class="nx">point</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">t0</span><span class="p">,</span> <span class="mi">0</span><span class="p">),</span> <span class="nx">point</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">t1</span><span class="p">,</span> <span class="mi">0</span><span class="p">)]));</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">polygons</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Polygon</span><span class="p">([</span><span class="nx">end</span><span class="p">,</span> <span class="nx">point</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">t1</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span> <span class="nx">point</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">t0</span><span class="p">,</span> <span class="mi">1</span><span class="p">)]));</span></div><div class='line' id='LC277'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC278'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">fromPolygons</span><span class="p">(</span><span class="nx">polygons</span><span class="p">);</span></div><div class='line' id='LC279'><span class="p">};</span></div><div class='line' id='LC280'><br/></div><div class='line' id='LC281'><span class="c1">// # class Vector</span></div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'><span class="c1">// Represents a 3D vector.</span></div><div class='line' id='LC284'><span class="c1">// </span></div><div class='line' id='LC285'><span class="c1">// Example usage:</span></div><div class='line' id='LC286'><span class="c1">// </span></div><div class='line' id='LC287'><span class="c1">//     new CSG.Vector(1, 2, 3);</span></div><div class='line' id='LC288'><span class="c1">//     new CSG.Vector([1, 2, 3]);</span></div><div class='line' id='LC289'><span class="c1">//     new CSG.Vector({ x: 1, y: 2, z: 3 });</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">z</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC292'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">z</span> <span class="o">=</span> <span class="nx">z</span><span class="p">;</span></div><div class='line' id='LC296'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;x&#39;</span> <span class="k">in</span> <span class="nx">x</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">z</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">z</span><span class="p">;</span></div><div class='line' id='LC300'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">x</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">x</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">z</span> <span class="o">=</span> <span class="nx">x</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC304'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC305'><span class="p">};</span></div><div class='line' id='LC306'><br/></div><div class='line' id='LC307'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC308'>&nbsp;&nbsp;<span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">z</span><span class="p">);</span></div><div class='line' id='LC310'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC311'><br/></div><div class='line' id='LC312'>&nbsp;&nbsp;<span class="nx">negated</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">z</span><span class="p">);</span></div><div class='line' id='LC314'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC315'><br/></div><div class='line' id='LC316'>&nbsp;&nbsp;<span class="nx">plus</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">a</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">a</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">z</span> <span class="o">+</span> <span class="nx">a</span><span class="p">.</span><span class="nx">z</span><span class="p">);</span></div><div class='line' id='LC318'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>&nbsp;&nbsp;<span class="nx">minus</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">a</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">a</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">z</span> <span class="o">-</span> <span class="nx">a</span><span class="p">.</span><span class="nx">z</span><span class="p">);</span></div><div class='line' id='LC322'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC323'><br/></div><div class='line' id='LC324'>&nbsp;&nbsp;<span class="nx">times</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">*</span> <span class="nx">a</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">*</span> <span class="nx">a</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">z</span> <span class="o">*</span> <span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC326'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC327'><br/></div><div class='line' id='LC328'>&nbsp;&nbsp;<span class="nx">dividedBy</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">/</span> <span class="nx">a</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">/</span> <span class="nx">a</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">z</span> <span class="o">/</span> <span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC330'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC331'><br/></div><div class='line' id='LC332'>&nbsp;&nbsp;<span class="nx">dot</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">*</span> <span class="nx">a</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">*</span> <span class="nx">a</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">z</span> <span class="o">*</span> <span class="nx">a</span><span class="p">.</span><span class="nx">z</span><span class="p">;</span></div><div class='line' id='LC334'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'>&nbsp;&nbsp;<span class="nx">lerp</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">plus</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">minus</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">times</span><span class="p">(</span><span class="nx">t</span><span class="p">));</span></div><div class='line' id='LC338'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'>&nbsp;&nbsp;<span class="nx">length</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">dot</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC342'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC343'><br/></div><div class='line' id='LC344'>&nbsp;&nbsp;<span class="nx">unit</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">dividedBy</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">());</span></div><div class='line' id='LC346'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC347'><br/></div><div class='line' id='LC348'>&nbsp;&nbsp;<span class="nx">cross</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">*</span> <span class="nx">a</span><span class="p">.</span><span class="nx">z</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">z</span> <span class="o">*</span> <span class="nx">a</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">z</span> <span class="o">*</span> <span class="nx">a</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">*</span> <span class="nx">a</span><span class="p">.</span><span class="nx">z</span><span class="p">,</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">*</span> <span class="nx">a</span><span class="p">.</span><span class="nx">y</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">*</span> <span class="nx">a</span><span class="p">.</span><span class="nx">x</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC354'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC355'><span class="p">};</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'><span class="c1">// # class Vertex</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'><span class="c1">// Represents a vertex of a polygon. Use your own vertex class instead of this</span></div><div class='line' id='LC360'><span class="c1">// one to provide additional features like texture coordinates and vertex</span></div><div class='line' id='LC361'><span class="c1">// colors. Custom vertex classes need to provide a `pos` property and `clone()`,</span></div><div class='line' id='LC362'><span class="c1">// `flip()`, and `interpolate()` methods that behave analogous to the ones</span></div><div class='line' id='LC363'><span class="c1">// defined by `CSG.Vertex`. This class provides `normal` so convenience</span></div><div class='line' id='LC364'><span class="c1">// functions like `CSG.sphere()` can return a smooth vertex normal, but `normal`</span></div><div class='line' id='LC365'><span class="c1">// is not used anywhere else.</span></div><div class='line' id='LC366'><br/></div><div class='line' id='LC367'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Vertex</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">pos</span><span class="p">,</span> <span class="nx">normal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC368'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pos</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="nx">pos</span><span class="p">);</span></div><div class='line' id='LC369'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">normal</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vector</span><span class="p">(</span><span class="nx">normal</span><span class="p">);</span></div><div class='line' id='LC370'><span class="p">};</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Vertex</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC373'>&nbsp;&nbsp;<span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vertex</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">clone</span><span class="p">(),</span> <span class="k">this</span><span class="p">.</span><span class="nx">normal</span><span class="p">.</span><span class="nx">clone</span><span class="p">());</span></div><div class='line' id='LC375'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'>&nbsp;&nbsp;<span class="c1">// Invert all orientation-specific data (e.g. vertex normal). Called when the</span></div><div class='line' id='LC378'>&nbsp;&nbsp;<span class="c1">// orientation of a polygon is flipped.</span></div><div class='line' id='LC379'>&nbsp;&nbsp;<span class="nx">flip</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">normal</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">normal</span><span class="p">.</span><span class="nx">negated</span><span class="p">();</span></div><div class='line' id='LC381'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'>&nbsp;&nbsp;<span class="c1">// Create a new vertex between this vertex and `other` by linearly</span></div><div class='line' id='LC384'>&nbsp;&nbsp;<span class="c1">// interpolating all properties using a parameter of `t`. Subclasses should</span></div><div class='line' id='LC385'>&nbsp;&nbsp;<span class="c1">// override this to interpolate additional properties.</span></div><div class='line' id='LC386'>&nbsp;&nbsp;<span class="nx">interpolate</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Vertex</span><span class="p">(</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">lerp</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">pos</span><span class="p">,</span> <span class="nx">t</span><span class="p">),</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">normal</span><span class="p">.</span><span class="nx">lerp</span><span class="p">(</span><span class="nx">other</span><span class="p">.</span><span class="nx">normal</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC391'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC392'><span class="p">};</span></div><div class='line' id='LC393'><br/></div><div class='line' id='LC394'><span class="c1">// # class Plane</span></div><div class='line' id='LC395'><br/></div><div class='line' id='LC396'><span class="c1">// Represents a plane in 3D space.</span></div><div class='line' id='LC397'><br/></div><div class='line' id='LC398'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Plane</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">normal</span><span class="p">,</span> <span class="nx">w</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC399'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">normal</span> <span class="o">=</span> <span class="nx">normal</span><span class="p">;</span></div><div class='line' id='LC400'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">w</span> <span class="o">=</span> <span class="nx">w</span><span class="p">;</span></div><div class='line' id='LC401'><span class="p">};</span></div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'><span class="c1">// `CSG.Plane.EPSILON` is the tolerance used by `splitPolygon()` to decide if a</span></div><div class='line' id='LC404'><span class="c1">// point is on the plane.</span></div><div class='line' id='LC405'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Plane</span><span class="p">.</span><span class="nx">EPSILON</span> <span class="o">=</span> <span class="mi">1</span><span class="nx">e</span><span class="o">-</span><span class="mi">5</span><span class="p">;</span></div><div class='line' id='LC406'><br/></div><div class='line' id='LC407'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Plane</span><span class="p">.</span><span class="nx">fromPoints</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC408'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">minus</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">cross</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">minus</span><span class="p">(</span><span class="nx">a</span><span class="p">)).</span><span class="nx">unit</span><span class="p">();</span></div><div class='line' id='LC409'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Plane</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span> <span class="nx">n</span><span class="p">.</span><span class="nx">dot</span><span class="p">(</span><span class="nx">a</span><span class="p">));</span></div><div class='line' id='LC410'><span class="p">};</span></div><div class='line' id='LC411'><br/></div><div class='line' id='LC412'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Plane</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC413'>&nbsp;&nbsp;<span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Plane</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">normal</span><span class="p">.</span><span class="nx">clone</span><span class="p">(),</span> <span class="k">this</span><span class="p">.</span><span class="nx">w</span><span class="p">);</span></div><div class='line' id='LC415'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC416'><br/></div><div class='line' id='LC417'>&nbsp;&nbsp;<span class="nx">flip</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">normal</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">normal</span><span class="p">.</span><span class="nx">negated</span><span class="p">();</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">w</span> <span class="o">=</span> <span class="o">-</span><span class="k">this</span><span class="p">.</span><span class="nx">w</span><span class="p">;</span></div><div class='line' id='LC420'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC421'><br/></div><div class='line' id='LC422'>&nbsp;&nbsp;<span class="c1">// Split `polygon` by this plane if needed, then put the polygon or polygon</span></div><div class='line' id='LC423'>&nbsp;&nbsp;<span class="c1">// fragments in the appropriate lists. Coplanar polygons go into either</span></div><div class='line' id='LC424'>&nbsp;&nbsp;<span class="c1">// `coplanarFront` or `coplanarBack` depending on their orientation with</span></div><div class='line' id='LC425'>&nbsp;&nbsp;<span class="c1">// respect to this plane. Polygons in front or in back of this plane go into</span></div><div class='line' id='LC426'>&nbsp;&nbsp;<span class="c1">// either `front` or `back`.</span></div><div class='line' id='LC427'>&nbsp;&nbsp;<span class="nx">splitPolygon</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">polygon</span><span class="p">,</span> <span class="nx">coplanarFront</span><span class="p">,</span> <span class="nx">coplanarBack</span><span class="p">,</span> <span class="nx">front</span><span class="p">,</span> <span class="nx">back</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">COPLANAR</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">FRONT</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">BACK</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">SPANNING</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC432'><br/></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Classify each point as well as the entire polygon into one of the above</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// four classes.</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">polygonType</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">types</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">polygon</span><span class="p">.</span><span class="nx">vertices</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">normal</span><span class="p">.</span><span class="nx">dot</span><span class="p">(</span><span class="nx">polygon</span><span class="p">.</span><span class="nx">vertices</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">pos</span><span class="p">)</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">w</span><span class="p">;</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="p">(</span><span class="nx">t</span> <span class="o">&lt;</span> <span class="o">-</span><span class="nx">CSG</span><span class="p">.</span><span class="nx">Plane</span><span class="p">.</span><span class="nx">EPSILON</span><span class="p">)</span> <span class="o">?</span> <span class="nx">BACK</span> <span class="o">:</span> <span class="p">(</span><span class="nx">t</span> <span class="o">&gt;</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Plane</span><span class="p">.</span><span class="nx">EPSILON</span><span class="p">)</span> <span class="o">?</span> <span class="nx">FRONT</span> <span class="o">:</span> <span class="nx">COPLANAR</span><span class="p">;</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">polygonType</span> <span class="o">|=</span> <span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">types</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC443'><br/></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Put the polygon in the correct list, splitting it when necessary.</span></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">polygonType</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">COPLANAR</span><span class="o">:</span></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">normal</span><span class="p">.</span><span class="nx">dot</span><span class="p">(</span><span class="nx">polygon</span><span class="p">.</span><span class="nx">plane</span><span class="p">.</span><span class="nx">normal</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">coplanarFront</span> <span class="o">:</span> <span class="nx">coplanarBack</span><span class="p">).</span><span class="nx">push</span><span class="p">(</span><span class="nx">polygon</span><span class="p">);</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">FRONT</span><span class="o">:</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">front</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">polygon</span><span class="p">);</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">BACK</span><span class="o">:</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">back</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">polygon</span><span class="p">);</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="nx">SPANNING</span><span class="o">:</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">f</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">b</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">polygon</span><span class="p">.</span><span class="nx">vertices</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">%</span> <span class="nx">polygon</span><span class="p">.</span><span class="nx">vertices</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ti</span> <span class="o">=</span> <span class="nx">types</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">tj</span> <span class="o">=</span> <span class="nx">types</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">vi</span> <span class="o">=</span> <span class="nx">polygon</span><span class="p">.</span><span class="nx">vertices</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">vj</span> <span class="o">=</span> <span class="nx">polygon</span><span class="p">.</span><span class="nx">vertices</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ti</span> <span class="o">!=</span> <span class="nx">BACK</span><span class="p">)</span> <span class="nx">f</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">vi</span><span class="p">);</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ti</span> <span class="o">!=</span> <span class="nx">FRONT</span><span class="p">)</span> <span class="nx">b</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">ti</span> <span class="o">!=</span> <span class="nx">BACK</span> <span class="o">?</span> <span class="nx">vi</span><span class="p">.</span><span class="nx">clone</span><span class="p">()</span> <span class="o">:</span> <span class="nx">vi</span><span class="p">);</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">ti</span> <span class="o">|</span> <span class="nx">tj</span><span class="p">)</span> <span class="o">==</span> <span class="nx">SPANNING</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">w</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">normal</span><span class="p">.</span><span class="nx">dot</span><span class="p">(</span><span class="nx">vi</span><span class="p">.</span><span class="nx">pos</span><span class="p">))</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">normal</span><span class="p">.</span><span class="nx">dot</span><span class="p">(</span><span class="nx">vj</span><span class="p">.</span><span class="nx">pos</span><span class="p">.</span><span class="nx">minus</span><span class="p">(</span><span class="nx">vi</span><span class="p">.</span><span class="nx">pos</span><span class="p">));</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">vi</span><span class="p">.</span><span class="nx">interpolate</span><span class="p">(</span><span class="nx">vj</span><span class="p">,</span> <span class="nx">t</span><span class="p">);</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">f</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">v</span><span class="p">);</span></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">v</span><span class="p">.</span><span class="nx">clone</span><span class="p">());</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">)</span> <span class="nx">front</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Polygon</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span> <span class="nx">polygon</span><span class="p">.</span><span class="nx">shared</span><span class="p">));</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">)</span> <span class="nx">back</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Polygon</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">polygon</span><span class="p">.</span><span class="nx">shared</span><span class="p">));</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC474'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC475'><span class="p">};</span></div><div class='line' id='LC476'><br/></div><div class='line' id='LC477'><span class="c1">// # class Polygon</span></div><div class='line' id='LC478'><br/></div><div class='line' id='LC479'><span class="c1">// Represents a convex polygon. The vertices used to initialize a polygon must</span></div><div class='line' id='LC480'><span class="c1">// be coplanar and form a convex loop. They do not have to be `CSG.Vertex`</span></div><div class='line' id='LC481'><span class="c1">// instances but they must behave similarly (duck typing can be used for</span></div><div class='line' id='LC482'><span class="c1">// customization).</span></div><div class='line' id='LC483'><span class="c1">// </span></div><div class='line' id='LC484'><span class="c1">// Each convex polygon has a `shared` property, which is shared between all</span></div><div class='line' id='LC485'><span class="c1">// polygons that are clones of each other or were split from the same polygon.</span></div><div class='line' id='LC486'><span class="c1">// This can be used to define per-polygon properties (such as surface color).</span></div><div class='line' id='LC487'><br/></div><div class='line' id='LC488'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Polygon</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">vertices</span><span class="p">,</span> <span class="nx">shared</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC489'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">vertices</span> <span class="o">=</span> <span class="nx">vertices</span><span class="p">;</span></div><div class='line' id='LC490'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">shared</span> <span class="o">=</span> <span class="nx">shared</span><span class="p">;</span></div><div class='line' id='LC491'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">plane</span> <span class="o">=</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Plane</span><span class="p">.</span><span class="nx">fromPoints</span><span class="p">(</span><span class="nx">vertices</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">pos</span><span class="p">,</span> <span class="nx">vertices</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">pos</span><span class="p">,</span> <span class="nx">vertices</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">pos</span><span class="p">);</span></div><div class='line' id='LC492'><span class="p">};</span></div><div class='line' id='LC493'><br/></div><div class='line' id='LC494'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Polygon</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC495'>&nbsp;&nbsp;<span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">vertices</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">vertices</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">v</span><span class="p">.</span><span class="nx">clone</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Polygon</span><span class="p">(</span><span class="nx">vertices</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">shared</span><span class="p">);</span></div><div class='line' id='LC498'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC499'><br/></div><div class='line' id='LC500'>&nbsp;&nbsp;<span class="nx">flip</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">vertices</span><span class="p">.</span><span class="nx">reverse</span><span class="p">().</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span> <span class="nx">v</span><span class="p">.</span><span class="nx">flip</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">plane</span><span class="p">.</span><span class="nx">flip</span><span class="p">();</span></div><div class='line' id='LC503'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC504'><span class="p">};</span></div><div class='line' id='LC505'><br/></div><div class='line' id='LC506'><span class="c1">// # class Node</span></div><div class='line' id='LC507'><br/></div><div class='line' id='LC508'><span class="c1">// Holds a node in a BSP tree. A BSP tree is built from a collection of polygons</span></div><div class='line' id='LC509'><span class="c1">// by picking a polygon to split along. That polygon (and all other coplanar</span></div><div class='line' id='LC510'><span class="c1">// polygons) are added directly to that node and the other polygons are added to</span></div><div class='line' id='LC511'><span class="c1">// the front and/or back subtrees. This is not a leafy BSP tree since there is</span></div><div class='line' id='LC512'><span class="c1">// no distinction between internal and leaf nodes.</span></div><div class='line' id='LC513'><br/></div><div class='line' id='LC514'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">polygons</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC515'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">plane</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC516'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">front</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC517'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">back</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC518'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">polygons</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC519'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">polygons</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">build</span><span class="p">(</span><span class="nx">polygons</span><span class="p">);</span></div><div class='line' id='LC520'><span class="p">};</span></div><div class='line' id='LC521'><br/></div><div class='line' id='LC522'><span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC523'>&nbsp;&nbsp;<span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">node</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span><span class="p">();</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">node</span><span class="p">.</span><span class="nx">plane</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">plane</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">plane</span><span class="p">.</span><span class="nx">clone</span><span class="p">();</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">node</span><span class="p">.</span><span class="nx">front</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">front</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">.</span><span class="nx">clone</span><span class="p">();</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">node</span><span class="p">.</span><span class="nx">back</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">back</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">.</span><span class="nx">clone</span><span class="p">();</span></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">node</span><span class="p">.</span><span class="nx">polygons</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">polygons</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">p</span><span class="p">.</span><span class="nx">clone</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">node</span><span class="p">;</span></div><div class='line' id='LC530'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC531'><br/></div><div class='line' id='LC532'>&nbsp;&nbsp;<span class="c1">// Convert solid space to empty space and empty space to solid space.</span></div><div class='line' id='LC533'>&nbsp;&nbsp;<span class="nx">invert</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">polygons</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">polygons</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">flip</span><span class="p">();</span></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">plane</span><span class="p">.</span><span class="nx">flip</span><span class="p">();</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">.</span><span class="nx">invert</span><span class="p">();</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">temp</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">;</span></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">front</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">;</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">back</span> <span class="o">=</span> <span class="nx">temp</span><span class="p">;</span></div><div class='line' id='LC543'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC544'><br/></div><div class='line' id='LC545'>&nbsp;&nbsp;<span class="c1">// Recursively remove all polygons in `polygons` that are inside this BSP</span></div><div class='line' id='LC546'>&nbsp;&nbsp;<span class="c1">// tree.</span></div><div class='line' id='LC547'>&nbsp;&nbsp;<span class="nx">clipPolygons</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">polygons</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">plane</span><span class="p">)</span> <span class="k">return</span> <span class="nx">polygons</span><span class="p">.</span><span class="nx">slice</span><span class="p">();</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">front</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">back</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">polygons</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">plane</span><span class="p">.</span><span class="nx">splitPolygon</span><span class="p">(</span><span class="nx">polygons</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">front</span><span class="p">,</span> <span class="nx">back</span><span class="p">,</span> <span class="nx">front</span><span class="p">,</span> <span class="nx">back</span><span class="p">);</span></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">)</span> <span class="nx">front</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">.</span><span class="nx">clipPolygons</span><span class="p">(</span><span class="nx">front</span><span class="p">);</span></div><div class='line' id='LC554'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">)</span> <span class="nx">back</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">.</span><span class="nx">clipPolygons</span><span class="p">(</span><span class="nx">back</span><span class="p">);</span></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="nx">back</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">front</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">back</span><span class="p">);</span></div><div class='line' id='LC557'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC558'><br/></div><div class='line' id='LC559'>&nbsp;&nbsp;<span class="c1">// Remove all polygons in this BSP tree that are inside the other BSP tree</span></div><div class='line' id='LC560'>&nbsp;&nbsp;<span class="c1">// `bsp`.</span></div><div class='line' id='LC561'>&nbsp;&nbsp;<span class="nx">clipTo</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">bsp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">polygons</span> <span class="o">=</span> <span class="nx">bsp</span><span class="p">.</span><span class="nx">clipPolygons</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">polygons</span><span class="p">);</span></div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">bsp</span><span class="p">);</span></div><div class='line' id='LC564'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">.</span><span class="nx">clipTo</span><span class="p">(</span><span class="nx">bsp</span><span class="p">);</span></div><div class='line' id='LC565'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC566'><br/></div><div class='line' id='LC567'>&nbsp;&nbsp;<span class="c1">// Return a list of all polygons in this BSP tree.</span></div><div class='line' id='LC568'>&nbsp;&nbsp;<span class="nx">allPolygons</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">polygons</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">polygons</span><span class="p">.</span><span class="nx">slice</span><span class="p">();</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">)</span> <span class="nx">polygons</span> <span class="o">=</span> <span class="nx">polygons</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">.</span><span class="nx">allPolygons</span><span class="p">());</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">)</span> <span class="nx">polygons</span> <span class="o">=</span> <span class="nx">polygons</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">.</span><span class="nx">allPolygons</span><span class="p">());</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">polygons</span><span class="p">;</span></div><div class='line' id='LC573'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC574'><br/></div><div class='line' id='LC575'>&nbsp;&nbsp;<span class="c1">// Build a BSP tree out of `polygons`. When called on an existing tree, the</span></div><div class='line' id='LC576'>&nbsp;&nbsp;<span class="c1">// new polygons are filtered down to the bottom of the tree and become new</span></div><div class='line' id='LC577'>&nbsp;&nbsp;<span class="c1">// nodes there. Each set of polygons is partitioned using the first polygon</span></div><div class='line' id='LC578'>&nbsp;&nbsp;<span class="c1">// (no heuristic is used to pick a good split).</span></div><div class='line' id='LC579'>&nbsp;&nbsp;<span class="nx">build</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">polygons</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC580'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">polygons</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC581'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">plane</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">plane</span> <span class="o">=</span> <span class="nx">polygons</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">plane</span><span class="p">.</span><span class="nx">clone</span><span class="p">();</span></div><div class='line' id='LC582'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">front</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">back</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">polygons</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC584'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">plane</span><span class="p">.</span><span class="nx">splitPolygon</span><span class="p">(</span><span class="nx">polygons</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="k">this</span><span class="p">.</span><span class="nx">polygons</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">polygons</span><span class="p">,</span> <span class="nx">front</span><span class="p">,</span> <span class="nx">back</span><span class="p">);</span></div><div class='line' id='LC585'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC586'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">front</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC587'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">front</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span><span class="p">();</span></div><div class='line' id='LC588'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">front</span><span class="p">.</span><span class="nx">build</span><span class="p">(</span><span class="nx">front</span><span class="p">);</span></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">back</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">back</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CSG</span><span class="p">.</span><span class="nx">Node</span><span class="p">();</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">back</span><span class="p">.</span><span class="nx">build</span><span class="p">(</span><span class="nx">back</span><span class="p">);</span></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC594'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC595'><span class="p">};</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04510s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

