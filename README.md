<!-- Summary opof useEffect  -->
1.After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.
<br/>
2.On later renderings, before invoking the next side-effect callback, useEffect() invokes the cleanup function from the previous side-effect execution (to clean up everything after the previous side-effect), then runs the current side-effect.
<br/>
3.Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.
<br/>