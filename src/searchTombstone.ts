/*
 * @Author: qiansc
 * @Date: 2018-12-12 11:28:18
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-12-17 12:31:54
 */

declare type Atom = any;
declare type TombstoneUI = any;

import { SkeletonAppearance, SkeletonAppearanceOptions } from "ralltiir-skeleton";

/**
 * 使用SearchUI/Tombstone组件实现的的SkeletonAppearance
 *
 * @example
 * require([
 *  'ralltiir-skeleton',
 *  'ralltiir-skeleton-tombstone',
 *  'Atom',
 *  'search-ui/v2/Tombstone/Tombstone',
 *  'search-ui/v2/Tombstone/ImgTombstone.css'
 * ], function(Skeleton, Tombstone, Atom, TombstoneUI) {
 *      var appearance = new Tombstone.SearchTombstone({
 *        Atom: Atom,
 *        TombstoneUI: TombstoneUI
 *      });
 *      skeleton = new Skeleton.Skeleton(container, appearance);
 *      skeleton.create();
 * });
 */

export class SearchTombstone implements SkeletonAppearance {
  private container: HTMLElement;
  constructor(private options: SearchTombstoneOptions) {}
  public render(options: SkeletonAppearanceOptions) {
    this.container = options.target;
    const target = document.createElement("div");
    target.style.margin = this.options.margin || "";
    const atomWrapper = document.createElement("div");
    this.container.appendChild(target);
    target.appendChild(atomWrapper);
    const tombstonePageProps = { type: this.options.type || 2};
    const atom = new this.options.Atom({
        components: {
          Tombstone: this.options.TombstoneUI,
        },
        data: tombstonePageProps,
        el: atomWrapper,
        render: (createElement) => {
            return createElement("Tombstone", {
                props: tombstonePageProps,
            });
        },
    });
    return this.container;
  }
  public destroy() {
    if (this.container) {
      this.container.innerHTML = "";
    }
  }
}

interface SearchTombstoneOptions {
  /** 依赖的Atom库 */
  Atom: Atom;
  /** SearchUI Tombstone组件 */
  TombstoneUI: TombstoneUI;
  /** 边距设置 */
  margin?: string;
  /** 样式类型设置 */
  type?: number;
  /** 图片占位图占的屏幕数量；默认1屏；当且仅当为图片类型 type === 1 时生效 */
  imgNum?: number;
  /** 其他类型占位加载的条数；默认6条；当且仅当不为图片类型 type !== 1 时生效 */
  num?: number;
}
