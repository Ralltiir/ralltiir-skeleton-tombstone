if (/rt-debug/.test(location.search)) {
  localStorage.debug = 'app:*';
}
var debug = localStorage.debug;

require.config({
  baseUrl: debug ? 'amd_modules' : '//unpkg.zhimg.com',
    paths: {
        // "ralltiir-skeleton/dist/index": "//unpkg.zhimg.com/ralltiir-skeleton/dist/index",
        // "ralltiir-skeleton/dist/skeleton": "//unpkg.zhimg.com/ralltiir-skeleton/dist/skeleton",
    },
    waitSeconds: 30
});

// apmjs auto-creates these entries when installed locally
define('ralltiir-skeleton', function (require) {
  return require('ralltiir-skeleton/dist/index');
});
define('ralltiir-skeleton-tombstone', function (require) {
  return require('ralltiir-skeleton-tombstone/dist/index');
});
define('Atom', function (require) {
  return require('@baidu/atom-web-runtime');
});
require(
    [
      'ralltiir-skeleton',
      'ralltiir-skeleton-tombstone',
      'Atom',
      'search-ui/v2/Tombstone/Tombstone',
      'search-ui/v2/Tombstone/ImgTombstone.css',
    ],
    function(Skeleton, Tombstone, Atom, TombstoneUI) {
      var skeleton;
      var container =  document.querySelector('.rt-body');
      function start(index) {
        var appearance = new Tombstone.SearchTombstone({
          Atom: Atom,
          TombstoneUI: TombstoneUI,
          margin: "15px",
          type: index
        });
        skeleton = new Skeleton.Skeleton(container, appearance, {
            background: "#FFF"
            ,fadeOut: true
            ,isOffset: true
        });
        skeleton.create();
      }
      document.querySelectorAll(".rt-tools span").forEach((tab) => {
        tab.onclick =  function() {
          document.querySelectorAll(".active").forEach((a) => a.className = "");
          this.className = "active";
          var index = this.getAttribute("index");
          if (!index) return;
          skeleton.destroy();
          setTimeout(function() {
            start(index * 1);
          }, 500);
        }
      });
      start(2);
});
