package com.github.pengfeizhou.hego.jse;

import com.github.pengfeizhou.jscore.JSDecoder;
import com.github.pengfeizhou.jscore.JSExecutor;
import com.github.pengfeizhou.jscore.JSRuntimeException;
import com.github.pengfeizhou.jscore.JavaFunction;
import com.github.pengfeizhou.jscore.JavaValue;

/**
 * @Description: Android
 * @Author: pengfei.zhou
 * @CreateDate: 2019-07-18
 */
public class HegoJSExecutor implements IHegoJSE {

    private final JSExecutor mJSExecutor;

    public HegoJSExecutor() {
        this.mJSExecutor = JSExecutor.create();
    }

    @Override
    public String loadJS(String script, String source) throws JSRuntimeException {
        return mJSExecutor.loadJS(script, source);
    }

    @Override
    public JSDecoder evaluateJS(String script, String source, boolean hashKey) throws JSRuntimeException {
        return mJSExecutor.evaluateJS(script, source, hashKey);
    }

    @Override
    public void injectGlobalJSFunction(String name, JavaFunction javaFunction) {
        mJSExecutor.injectGlobalJSFunction(name, javaFunction);
    }

    @Override
    public void injectGlobalJSObject(String name, JavaValue javaValue) {
        mJSExecutor.injectGlobalJSObject(name, javaValue);
    }

    @Override
    public JSDecoder invokeMethod(String objectName, String functionName, JavaValue[] javaValues, boolean hashKey) throws JSRuntimeException {
        return mJSExecutor.invokeMethod(objectName, functionName, javaValues, hashKey);
    }

    @Override
    public void teardown() {
        mJSExecutor.destroy();
    }
}