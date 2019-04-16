// Modal Component

/*
Props:

className: string (create accordion-name class )
size: Size
color: String ('main'....)
gutter: String // def: Gutter.sm;
onClick - Function
block - full width button
sharp - no border radius (default is .5rem;
 */


/* ***** Examples: ***** */


import {FontSize, Gutter} from "../../style/style";

const component = (
    <Button className={'test'}
            size={FontSize.lg}
            color={'main'}
            gutter={`${Gutter.xxs} ${Gutter.md}`}
            onClick={this.doSomething}
            block
            sharp>
        bla
    </Button>
);