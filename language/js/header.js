// code for header

canvas = O('mycanvas')
context = canvas.getContext('2d')
S(canvas).background = 'transparent'

context.font = 'bold 140px Times'
context.textBaseline = 'top'

image = new Image()
image.src = 'wicker.jpg'

image.onload = function()
{
	pattern = context.createPattern(image, 'repeat')
	context.fillStyle = pattern
	context.fillText('Thai Alphabet', 150, 0)
	context.strokeText('Thai Alphabet', 150, 0)
}
		
