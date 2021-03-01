'use strict';

var doric = require('doric');

const icon_refresh = 'data:image/png;base64,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';
const colors = [
    "#70a1ff",
    "#7bed9f",
    "#ff6b81",
    "#a4b0be",
    "#f0932b",
    "#eb4d4b",
    "#6ab04c",
    "#e056fd",
    "#686de0",
    "#30336b",
].map(e => doric.Color.parse(e));
function label(str) {
    return doric.text({
        text: str,
        textSize: 16,
    });
}
function title(str) {
    return doric.text({
        text: str,
        layoutConfig: doric.layoutConfig().configWidth(doric.LayoutSpec.MOST),
        textSize: 30,
        textColor: doric.Color.WHITE,
        backgroundColor: colors[1],
        textAlignment: doric.gravity().center(),
        height: 50,
    });
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RefreshableDemo = class RefreshableDemo extends doric.Panel {
    build(rootView) {
        let refreshImage;
        let refreshView = doric.refreshable({
            layoutConfig: doric.layoutConfig().most(),
            onRefresh: () => {
                doric.log('onRefresh');
                setTimeout(() => {
                    refreshView.setRefreshing(context, false);
                }, 5000);
            },
            header: doric.pullable(doric.stack([
                doric.image({
                    layoutConfig: doric.layoutConfig().just().configMargin({ top: 50, bottom: 10, }),
                    width: 30,
                    height: 30,
                    imageBase64: icon_refresh,
                }).also(v => {
                    refreshImage = v;
                }),
            ]), {
                startAnimation: () => {
                    doric.log('startAnimation');
                },
                stopAnimation: () => {
                    doric.log('stopAnimation');
                },
                setPullingDistance: (distance) => {
                    refreshImage.rotation = distance / 30;
                },
            }),
            content: (doric.vlayout([
                title("Refreshable Demo"),
                label('start Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors[0],
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshing(context, true);
                    }
                }),
                label('stop Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors[0],
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshing(context, false);
                    }
                }),
                label('Enable Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors[0],
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshable(context, true);
                    }
                }),
                label('Disable Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors[0],
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshable(context, false);
                    }
                }),
            ]).apply({
                layoutConfig: doric.layoutConfig().most().configHeight(doric.LayoutSpec.FIT),
                gravity: doric.gravity().centerX(),
                space: 10,
            }))
        }).apply({
            backgroundColor: doric.Color.YELLOW
        }).in(rootView);
    }
};
RefreshableDemo = __decorate([
    Entry
], RefreshableDemo);
//# sourceMappingURL=RefreshableDemo.js.map