import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";


import MenuItem from "../menu-item/menu-item.component";

import "./directory.style.scss";

const Directory = ({sections}) => {
        return(
            <div className="directory-menu">
                {
                    sections.map((section) => {
                        return (<MenuItem title={section.title} key={section.id} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl}/>)
                    })
                }
            </div>
        )
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);