/*
 * @Author: qiansc
 * @Date: 2018-12-12 11:28:18
 * @Last Modified by: qiansc
 * @Last Modified time: 2018-12-13 10:56:30
 */

declare type Atom = any;
declare type TombstoneUI = any;

import { SkeletonAppearance, SkeletonAppearanceOptions } from "ralltiir-skeleton";

export class SearchTombstone implements SkeletonAppearance {
  private container: HTMLElement;
  // private id = new Date().getTime().toString(32);
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
    this.container.innerHTML = "";
  }
}

interface SearchTombstoneOptions {
  Atom: Atom;
  TombstoneUI: TombstoneUI;
  margin?: string;
  type?: number;
}
