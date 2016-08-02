# How to  install React-Native for Windows 10
# Day1
## Download

 * ## android ide
 * ## amdroid-sdk and install All package
 * ## Java dev 1.8 and 1.7 (error code run-android)

# cmd configuration
```
$ npm install -g react-native-cli
set ANDROID_HOME=C:\ installation location \android-sdk
set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
```
# set Avd android
```
 Lunch start android
 run AVD android
```

# for Windows 10
```
 $ JAVA_HOME  --> C:\Program Files\Java\jdk1.7.0_79
 $ ANDROID_HOME --> C:\Users\tak\AppData\Local\Android\android-sdk\
```




# Day2
# NPM
## -- ScrollableTabView --
```
 $ npm install react-native-scrollable-tab-view --save
```
## --Css to android --
```
 $ npm install react-native-css
```

# HTML and Native components

| HTML     |  React Native |   
|----------|:-------------:|
| div      |  View         |
| img      |    Image      |  
| span, p  | Text          |
| ul/ol, li |  ListView, child items|

# Day3
## การทำการ Import ... from ..

 ## Ex
 # File temp.js
 ```javascript
 const message = "Hello React-Native เราจะมาทำ React"
 module.exports = message
 ```
 # File index.android.js
 ```javascript
 import message from './temp.js'
 ```

# Finally
```javascript
import message from './temp.js'

class Myapp extends Component {
  render () {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>{message}</Text>
      </View>
    )
  }
}
```
