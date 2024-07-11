package com.longuaservices // Replace with your package name

import com.facebook.react.ReactActivity
import android.content.Intent
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView
import com.reactnativegooglesignin.RNGoogleSigninPackage // Ensure this import is correct

class MainActivity : ReactActivity() {

  private val mCallbackManager = CallbackManager.Factory.create()

  override fun getMainComponentName(): String {
    return "longuaservices"
  }

  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)
    mCallbackManager.onActivityResult(requestCode, resultCode, data)
  }

  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return object : ReactActivityDelegate(this, mainComponentName) {
      override fun createRootView(): ReactRootView {
        return ReactRootView(context)
      }
    }
  }
}
