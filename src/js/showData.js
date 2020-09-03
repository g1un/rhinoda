export class ShowData {
  constructor(data) {
    this.data = data;
    if (data && data.length) {
      this.init();
    }
  }

  init() {
    /* let's transform data to the array of objects with unique parentIds and 'rows' property,
    contained array of objects from initial data with new object's parentIds:
    Array<{
      parentId: number;
      rows: Array<{
        id: number;
        parentId: number;
        isActive: boolean;
        balance: string;
        name: string;
        email: string;
      }>
    }>
    */
    this.transformedData = this.data
      // transform to new structure
      .reduce((acc, item) => {
        const parentIdIndex = acc.map(i => i.parentId).indexOf(item.parentId);
        if (!acc.length || parentIdIndex === -1) {
          acc.push({
            parentId: item.parentId,
            rows: [item],
          });
        } else {
          acc[parentIdIndex].rows.push(item);
        }

        return acc;
      }, [])
      // sort by parentId
      .sort((a, b) => a.parentId - b.parentId)
      // sort rows by id
      .map(({ parentId, rows }) => ({
        parentId,
        rows: rows.sort((a, b) => a.id - b.id),
      }));

    // create accordion and append to DOM
    this.createAccordion(this.transformedData);

    // create filter by isActive
    const filterBlock = document.createElement('div');
    const filterButton = document.createElement('button');
    filterBlock.classList.add('filter');
    filterButton.classList.add('filter-btn');
    filterBlock.innerText = 'Filter by isActive:';
    filterButton.innerText = 'Off';
    filterBlock.append(filterButton);
    document.body.prepend(filterBlock);

    filterButton.addEventListener('click', () => {
      if (filterButton.innerText === 'Off') {
        filterButton.innerText = 'On';
        const dataWithOnlyActiveRows = [];
        this.transformedData.forEach(item => {
          const rows = item.rows.filter(row => row.isActive);
          if (rows.length) {
            dataWithOnlyActiveRows.push({
              parentId: item.parentId,
              rows,
            })
          }
        });
        this.createAccordion(dataWithOnlyActiveRows);
      } else {
        filterButton.innerText = 'Off';
        this.createAccordion(this.transformedData);
      }
    })

    // create expand all button
    this.isAllExpanded = false;
    const expandButton = document.createElement('button');
    expandButton.classList.add('expand');
    expandButton.innerText = 'Always Expand: ';
    const expandButtonSpan = document.createElement('span');
    expandButtonSpan.innerText = 'Off';
    expandButton.append(expandButtonSpan);
    expandButton.addEventListener('click', () => {
      const container = document.querySelector('.container');
      if (expandButtonSpan.innerText === 'Off') {
        expandButtonSpan.innerText = 'On';
        this.isAllExpanded = true;
        container.classList.add('_all-expanded');
      } else {
        expandButtonSpan.innerText = 'Off';
        this.isAllExpanded = false;
        container.classList.remove('_all-expanded');
      }
    });
    document.body.insertBefore(expandButton, filterBlock);
  }

  // function to create accordion with tables
  createAccordion(data) {
    // remove previous
    const previousContainer = document.querySelector('.container');
    if (previousContainer) {
      document.body.removeChild(previousContainer);
    }

    const container = document.createElement('div');
    container.classList.add(`container`);
    if (this.isAllExpanded) {
      container.classList.add(`_all-expanded`);
    }

    data.forEach(item => {
      const block = document.createElement('div');
      block.classList.add('block');

      const button = document.createElement('button');
      button.classList.add('btn');
      button.innerText = `parentId: ${item.parentId}`;
      button.addEventListener('click', function () {
        if (this.classList.contains('_active')) {
          this.classList.remove('_active');
        } else {
          this.classList.add('_active');
        }
      });
      block.append(button);

      const table = document.createElement('table');
      const thead = document.createElement('thead');
      table.append(thead);
      Object.keys(item.rows[0]).forEach(key => {
        if (key !== 'parentId') {
          const th = document.createElement('th');
          th.innerText = key;
          thead.append(th);
        }
      });
      item.rows.forEach(item => {
        const tr = document.createElement('tr');
        Object.keys(item).forEach(key => {
          if (key !== 'parentId') {
            const td = document.createElement('td');
            td.innerText = item[key];
            tr.append(td);
          }
        });
        table.append(tr);
      });
      block.append(table);

      container.append(block);
    });

    document.body.append(container);
  }
}
