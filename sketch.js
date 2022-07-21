var x=100
var y=100
var d='r'
var l = 3
var firstspeed = 10
var speed = 10
var ax = 0 //사과의 x좌표
var ay = 0 //사과의 y좌표
var size = 30
var sx =[0,size*1,size*2]
var sy =[size*10,size*10,size*10]
var dead = false//아직은 죽지않음
// const DeadSound
// DeadSound.scr=''
function makeApple(){
    ax = Math.floor(random(0,(800/size-1)))*size
    ay = Math.floor(random(0,(500/size-1)))*size
}//사과의 랜덤 좌표 생성
function isDead(){
//1번 화면밖으로 나간다
if(sx[l-1]<0||
    sx[l-1]>=800||
    sy[l-1]<0||
    sy[l-1]>=600){
    return true
}
for(let i=0;i<l-3;i++){
    if(sx[i]==sx[l-1]&&sy[i]==sy[l-1]){
        return true
    }
}
return false
}
function setup(){
  createCanvas(800,600)
  frameRate(10)
  makeApple()//사과 생성
}

function draw(){
    if(isDead()){
    fill('#7060E6')
    textSize(80)
    text('죽었습니다',200,250)
    text('최종 SCORE '+l*10,125,350)
    return
};//죽었으면 함수 실행 안함
    background('black')
    fill(255)
    textSize(20)
    text('SCORE: '+(l-3)*10,30,30)
    fill('red')
    rect(ax,ay,size,size)//사과
    fill('white')
    rect(sx[0],sy[0],size,size)
    for(let i=1;i<l;i++){
            rect(sx[i], sy[i],size,size)
            sx[i-1]=sx[i]
            sy[i-1]=sy[i]
    }
if(d=='d'){
    sy[l-1]+=size
}else if(d=='u'){
    sy[l-1]-=size
}else if(d=='r'){
    sx[l-1]+=size
}else if(d=='l'){
    sx[l-1]-=size
}
if(sx[l-1]==ax&&sy[l-1]==ay){
    textSize(20)
    text('+10',90,50)
    //사과를 먹은 것
    l+=1//길이가 길어진다
    sx.push(ax)
    sy.push(ay)
    makeApple()//사과 위치 바꾸기
}
}

function keyPressed(){
    switch(keyCode){
        case 38:
            d ='u'
            break;
        case 40:
            d = 'd'
            break;
        case 39:
            d = 'r'
            break;
        case 37:
            d = 'l'
            break;
            case 32:
                 sx =[0,size*1,size*2]
                 sy =[size*10,size*10,size*10]
                 l=3
                 d='r'
                 makeApple()
                 break;
    }
}

