import demonList from "list.json" with { type: "json" };
import info from "info.json" with { type: "json" };

let listBtn = $("#list-btn");
let packBtn = $("#pack-btn");
let list = $("#demon-list-container");

function renderList(amount) {
  list.empty();
  for (let i = 0; i < amount; i++) {
    if (!demonList[i]) break;
    list.append(`
    <span id="${demonList[i].name}">
      <li>
        <p>
          <strong>#${i + 1}</strong>
          <br>
          <strong>${demonList[i].name}</strong> By 
          <strong>${demonList[i].creator}</strong>
        </p>
      </li>
    </span>
    `);
  }
}

listBtn.on("click", () => renderList(150));
