// Panel Component

/*
Props:

className: string (create grid-name class )
cells: Array. required.
gutter: Define the gutters bwtween cells
cellSize: {min, xs, sm, md, lg)
 */


/* ***** Examples: ***** */

const htmls = [
    <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/barvaz_meshuyash.jpg'}/>,
    <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/nahlieli.jpg'}/>,
];

const component = (
    <Grid className={'test'}
          cells={htmls}
          gutter={'1px'}
          cellSize={{
              min: '100%',
              xs: '50%',
              sm: '33.33%',
              md: '25%',
              lg: '20%'
          }}
    />
);