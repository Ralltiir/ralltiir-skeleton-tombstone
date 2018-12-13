# Ralltiir Skeleton
![Language](https://img.shields.io/badge/-TypeScript-blue.svg)
[![Build Status](https://travis-ci.org/ralltiir/ralltiir-skeleton-tombstone.svg?branch=master)](https://travis-ci.org/ralltiir/ralltiir-skeleton-tombstone)
[![Coveralls](https://img.shields.io/coveralls/ralltiir/ralltiir-skeleton-tombstone.svg)](https://coveralls.io/github/ralltiir/ralltiir-skeleton-tombstone)
[![npm package](https://img.shields.io/npm/v/ralltiir-skeleton-tombstone.svg)](https://www.npmjs.org/package/ralltiir-skeleton-tombstone)
[![npm downloads](http://img.shields.io/npm/dm/ralltiir-skeleton-tombstone.svg)](https://www.npmjs.org/package/ralltiir-skeleton-tombstone)

## What's ralltiir-skeleton-tombstone
ralltiir-skeleton-tombstone是提供了ralltiir-skeleton所需的骨架屏类外观库，实现上有基于SearchUI及原生（非SearchUI）两种方式。

## Demo
[ralltiir-skeleton-tombstone](https://ralltiir.github.io/ralltiir-skeleton-tombstone/demo/)

## Module

[API](https://ralltiir.github.io/ralltiir-skeleton-tombstone/)

### SearchUI Tombstone

Example

```
require([
 'ralltiir-skeleton',
 'ralltiir-skeleton-tombstone',
 'Atom',
 'search-ui/v2/Tombstone/Tombstone',
 'search-ui/v2/Tombstone/ImgTombstone.css'
], function(Skeleton, Tombstone, Atom, TombstoneUI) {
     var appearance = new Tombstone.SearchTombstone({
       Atom: Atom,
       TombstoneUI: TombstoneUI
     });
     skeleton = new Skeleton.Skeleton(container, appearance);
     skeleton.create();
});

```

### 原生 Tombstone

敬请期待

