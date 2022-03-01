   // 2. This code loads the IFrame Player API code asynchronously.
   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   // 3. This function creates an <iframe> (and YouTube player)
   //    after the API code downloads.
   function onYouTubeIframeAPIReady() {
        //<div id="player> 로지정한 부분을 지칭한다 아래에 있는 플레이어가"
    new YT.Player('player', {
   //    height: '360',
    //   width: '640',  영상에 가로세로 너비인데 이미 css로 지정했기에 지정할 필요가 없다

       videoId: '8OXfAOdysSo',  //최쵸 재생할 유튜브 영상 ID
       playerVars:{
           autoplay: true,      // 자동재생유무
           loop:true,        //반복재생유무
           playlist: '8OXfAOdysSo'  //반복재생할 유튜브 영상 ID 목록
       },              //영상을 재생하기 위한 여러가지 옵션들
        events :{     //객체 데이터 안에 함수데이터는 메소드이다
            onReady: function(event){   //onReady가 실행되면 함수실행   event 인수는 동영상 상황 자체를 받음      
                event.target.mute() //음소거
            }
        }        
     });
   }