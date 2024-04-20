
Para seleccionar multiples localizaciones pulsamos `Alt` y luego pulsamos con el ratón.

## Emmet es tu amigo


Create an ordered list with at least three list items. Give each list item an id. The id should be the word "li" and a number after it. So, the first list item should have an id of "li1", the second should have an id of "li2" and so on.

ol>li#li${Item $}*3

<ol>
  <li id="li1">Item 1</li>
  <li id="li2">Item 2</li>
  <li id="li3">Item 3</li>
</ol>

Your job is to write an unordered list with at least three list items inside. The list should have an id of "firstList" each list item in this list should have a specific id. The ids should be "li1", "li2", "li3", and so on. You should also have a nested (stacked) unordered list with the id "secondList" with as many list items as you want. The list items inside this unordered list do not need to have an id.

ul#firstList>li#li${Item $}*3
ul#secondList>li{Sub-Item $}*3

<ul class="firstList">
  <li id="id1">Item 1</li>
  <li id="id2">Item 2</li>
  <li id="id3"><ul class="secondList">
    <li>Sub-Item 1</li>
    <li>Sub-Item 2</li>
    <li>Sub-Item 3</li>
  </ul></li>
</ul>



SHIFT + TAB --> Mueve el codigo identado hacia la izquierda
TAB --> Mueve el codigo identado hacia la derecha