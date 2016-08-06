var poem1 = {
		"title" : "KỶ NIỆM",
		"text" : "<p>Kho tàng kỷ niệm thật mênh mông<br>Những vật vô tri đầy ý tứ<br>Những chuyện vui buồn trong quá khứ<br>Kiểu ngồi, dáng đứng, ánh mắt trông...<br>Kỷ niệm chẳng hề giống dòng sông<br>Với bến đợi vẽ tô hào nhoáng<br>Kỷ niệm như mảng đời ngắt quãng<br>Chợt ào về giây phút ngẩn ngơ !<br><br>Kỷ niệm đôi lúc đẹp như mơ<br>Có khi dằng dai như chủ nợ<br>Từng thời chéo chồng trong nỗi nhớ<br>Như họa đồ những chốn kinh qua !<br><br>Kỷ niệm chẳng hề giống sân ga<br>Mỏi mòn đón đưa người qua lại<br>Kỷ niệm giống như tàu không lái<br>Chẳng biết bao giờ hết lang thang !<br><br>Kỷ niệm xẻ chia niềm xốn xang<br>Là lời ru khi đời khốn khó<br>Là gói hành trang ảo huyền nho nhỏ<br>Là những gì sống chết cũng gắng mang !<br></p>",
		"img" : "img/2.png"		
};

var poem2 = {
		"title" : "LÀM ÔNG CHẲNG DỄ",
		"text" : "dksjdlksajdlska",
		"img" : "img/3.png"		
};

var poem3 = {
		"title" : "LÀM ÔNG CHẲNG DỄ",
		"text" : "sjkdlajskdl dskajldsa <br> dsjkaldjska <br>dsakdljsakdksla",
		"img" : "img/1.png"		
};

var poems = [poem1, poem2];

$(document).ready(function(){
    $("#btn1").click(function(){
        $("h1").replaceWith("<h1>" + poem1.title + "</h1>");
        $(".photo-container").css("background-image", "url(" + poem1.img + ")");
        $(".poem").html(poem1.text);
        $('.open').removeClass('open');
    });
    $("#btn2").click(function(){
        $("h1").replaceWith("<h1>" + poem2.title + "</h1>");
        $(".photo-container").css("background-image", "url(" + poem2.img + ")");
        $(".poem").html(poem2.text);
        $('.open').removeClass('open');
    });
     $("#btn3").click(function(){
        $("h1").replaceWith("<h1>" + poem3.title + "</h1>");
        $(".photo-container").css("background-image", "url(" + poem3.img + ")");
        $(".poem").html(poem3.text);
        $('.open').removeClass('open');
    });
});
