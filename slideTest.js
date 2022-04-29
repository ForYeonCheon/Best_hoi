class slideTest
{
	constructor() 
	{
		this._slideIndex = 0;
		this._nowRow = null ;
		
		
		/*
		
			init()
			.
			.
			.
			
			eventhandler()
			.
			.
			.
			
		*/
		
		
		
		
		_appendRow(Prefrank)
		{
	//--   
			const bcdChordBasDTO = this._bcdChordBasList.bcdChordBasDTO[Prefrank];	
	//--   위 코드에서 list를 뿌리는 정보가 있다고 하자 
			
			const btnModal = newCaseRow.querySelector('.btnModal');   //-- 모달 버튼태그 class선택자
			const divpicOrFile = document.getElementById('divpicOrFile'); //-- 모달 jsp의 뿌려지는 div 공간 	
			
			btnModal.addEventListener('click', (ev) => {
				
			//-- 클릭시 그려지는 공간 초기화 시켜준다. 
				divpicOrFile.innerHTML = '';
				
			//-- 현재 Row 순번  
				this._nowRow = bcdChordBasDTO.pref_Rank - 1 ;       
				document.getElementById(modalTitle).innerHTML = "이곳은 모달의 제목입니다.";
				
			//--	bcdChordBasDTO에 picOrFile컬럼이 있다고 가정한다 이곳에는 파일이나 이미지가 들어있다
				if(bcdChordBasDTO.picOrFile.length > 0)
				{
				
				//-- picOrFile 컬럼 안에 파일다건 처리를 ',' 를 구분자로 붙혔다.. db안은 예를들어 FILE_1,FILE_2,FILE_3
				//-- SPLIT으로 쪼개서 LIST를 만든다. 
					let picOrFileList = bcdChordBasDTO.picOrFile.split(',');
						
						if(picOrFileList.length > 0)
						{
							picOrFileList.forEach((el, index) => {
								divpicOrFile.innerHTML += 'div class = "mySlides" style="test-align:center;">'
									+ '<img src="/resource/프로잭트/'+ el +'">';
									+ '<div class = "nIndexPic">' + (index+1) + '/' + picOrFileList.length + '</div>'
									+ '</div>';	
							});
							
							if(picOrFileList.lenght > 1)
							{
								divpicOrFile.innerHTML += '<a class = "imgPrev">8#10094;</a>';
								divpicOrFile.innerHTML += '<a class = "imgNext">8#10095;</a>';
							
								divpicOrFile.querySelector('.imgPrev').addEventListener('click', ev =>{
									this._moveSlides(-1);
								});
								divpicOrFile.querySelector('.imgPrev').addEventListener('click', ev =>{
									this._moveSlides(1);
								});
							}
						}
					this._showSlides();
				}
				else
				{
					//-- 데이터 없는 처리 할것 					
				}
			});	
		}
		
		_moveSlides(n)
		{
			this._slideIndex = this._slideIndex + n ;
			this._showSlides();
		}
		
		_currentSlides(n)
		{
			this._slideIndex = n ;
			this._showSlides();
		}
		
		_showSlides()
		{
			let slides = document.getElementById('mySlides');
			const slidSize = slides.length;
			
			if(( this._slideIndex + 1) > slidSize)
				this._slideIndex = 0;
			else if( this._slideIndex < 0)
				this._slideIndex = slidSize - 1 ;	
		
			for(let nIndex = 0 ; nIndex < slidSize; nIndex++)
				slides[nIndex].style.display = "none";
			slides[this._slideIndex].style.display = "block";
		}
		
	}
}

window.detail = new slideTest();