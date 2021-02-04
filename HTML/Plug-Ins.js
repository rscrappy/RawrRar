/* February 2021 - RoccoLox Programs */
var tabs = localStorage.getItem('tabs');
var width = 100 / tabs; // calculates width
var style = 'width: ' + width.toString() + '%;';
var w = 5;
if (tabs > 4) {
    while (w <= tabs) {
        // adds-in plug-in table cells with styling
        var td = document.createElement('TD');
        td.setAttribute('id','test');
        td.setAttribute('class','menuMain')
        td.setAttribute('style',style);
        td.innerHTML = '<a href="" class="menuMain"><p class="menuItems"><img src="BlankIcon.jpg"/>Plug-in</p></a>';
        document.getElementById('tr').appendChild(td);
        w++;
    }
}
// sets width for each table cell
document.getElementById('overview').setAttribute('style',style);
document.getElementById('grades').setAttribute('style',style);
document.getElementById('attendance').setAttribute('style',style);
if (localStorage.getItem('portal') === 'Student') {
    document.getElementById('grhistory').setAttribute('style',style);
} else {
    document.getElementById('lookup').setAttribute('style',style);
}
