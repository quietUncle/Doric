/*
 * Copyright [2019] [Doric.Pub]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { BridgeContext } from "../runtime/global"
export function notification(context: BridgeContext) {
    return {
        publish: (args: { biz?: string, name: string, data?: object, androidSystem?: boolean }) => {
            if (args.data !== undefined) {
                (args as any).data = JSON.stringify(args.data)
            }
            return context.notification.publish(args)
        },
        subscribe: (args: { biz?: string, name: string, callback: (data?: any) => void, androidSystem?: boolean }) => {
            (args as any).callback = (context as any).function2Id(args.callback)
            return context.notification.subscribe(args) as Promise<string>
        },
        unsubscribe: (subscribeId: string) => {
            (context as any).removeFuncById(subscribeId)
            return context.notification.unsubscribe(subscribeId)
        }
    }
}