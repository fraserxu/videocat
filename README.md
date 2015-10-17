# videocat
webrtc video sharing electron app for mac os.

Idea and styles borrowed from [screencat](https://github.com/maxogden/screencat).

![videocat](https://cloud.githubusercontent.com/assets/1183541/10559177/c0ffd4b0-751c-11e5-8615-94442c814bff.png)

Use electron to stream video to the Internet. If you prefer a command line tool, check out [electron-video-stream](https://github.com/fraserxu/electron-video-stream).

Usage
=====

**The publisher**

* Download and open the [VideoCat app](https://github.com/fraserxu/videocat/releases/download/v0.0.1/VideoCat-darwin-x64.zip).
* Select the camera and input an unique ID.
* Click the Share Stream button.

**The Subscriber**

Go and visit https://fraserxu.me/videocat?{ID}

### How it works

* Use electron to capture the video stream
* webRTC to create connection

### Development

`npm install` to install all the dependencies

`npm run build` to build the code for client

`npm start` to start electron

### To publish

I use gh-pages to host static page.

```
git checkout -b gh-pages
git reset --hard origin/master
git add --all
git commit -m 'gh-pages update'
git push origin gh-pages
```

License
=======
MIT
