main();

function main()
{
    const canvas= document.getElementById("canvas");
    const gl = convas.getContext("webgl");

    if(lg === null){
        alert("Unable to initiate WebGL. Your browser or Machine may not support it.",);
        return;
    }

    //set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLO_BUFFER_BIT);
}