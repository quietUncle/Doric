import axios from 'axios'
import { jsCallReject } from 'doric/src/runtime/sandbox'

declare const doricLibBundle: string

let contexId = 0

function getContextId() {
    return `${contexId++}`
}

function initDoric() {
    jsCallReject('', '')
}


console.log(doricLibBundle)

initDoric()
export class DoricElement extends HTMLElement {
    source: string
    alias: string

    constructor() {
        super()
        this.source = this.getAttribute('src') || ""
        this.alias = this.getAttribute('alias') || this.source
        axios.get<string>(this.source).then(result => {
            this.load(result.data)
        })
    }

    load(content: string) {
        const script = document.createElement('script');
        const contextId = getContextId();
        script.text = `Reflect.apply(function(doric,context,Entry,require,exports){
                ${content}
            },doric.jsObtainContext("${contextId}"),[undefined,doric.jsObtainContext("${contextId}"),doric.jsObtainEntry("${contextId}"),doric.__require__,{}]);`
        this.append(script)
    }
}