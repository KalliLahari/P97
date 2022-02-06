students=[];
function submit(){
    display_array=[];
    for(var j=1;j<=4;j++)
    {
        var student_names=document.getElementById("name_of_the_student_"+j).value;
        console.log(student_names);
        students.push(student_names);
    }
    console.log(students);
    var length=students.length;
    console.log(length);
    for(var k=0;k<length;k++){
        display_array.push("<h4> Name-"+students[k]+"</h4>");
        console.log(display_array);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    students.sort();
    console.log(students);
    sort_array=[];
    var length=students.length;
    console.log(length);
    for(var k=0;k<length;k++){
        sort_array.push("<h4> Name-"+students[k]+"</h4>");
        console.log(sort_array);
    }
    
    var remove_commas=sort_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}