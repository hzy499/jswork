function rec(){
	var score; //score变量，用来存储用户输入的成绩值。
	score =prompt("please input your score");                ;
	if(score>=90)
	{
	   document.write("你很棒!");
	}
	else if(score>=75)
    {
	   document.write("不错吆!");
	}
	else if(score>=60)
    {
	   document.write("要加油!");
    }
    else
	{
       document.write("要努力了!");
	}
  }