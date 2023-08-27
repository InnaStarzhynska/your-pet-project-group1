
import SvgIcon from 'components/SvgIcon/SvgIcon';
import React from 'react'


const item = {
_id: "64e5b519832acb0de7029d2b",
category:"sell",
title:"rats for sell",
name:"ratty",
dateOfBirth:"2015-02-21T22:00:00.000+00:00",
type:"rat",
sex:"female",
location:"Lviv",
price:333,
comments:"ratratratrat",
owner:"64e5ad4c573d75c978b7a81f",
createdAt:"2023-08-23T07:28:25.039+00:00",
updatedAt:"2023-08-23T07:28:25.189+00:00",
avatar:"https://www.istockphoto.com/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%BB%D0%B0%D1%81%D0%BD%D0%B8%D0%BA-%D0%B4%D0%B0%D1%94-%D0%B7%D0%B0%D0%BA%D1%83%D1%81%D0%BA%D0%B8-%D0%B0%D0%B1%D0%BE-%D0%BF%D1%80%D0%B8%D0%B7-%D1%81%D0%BE%D0%B1%D0%B0%D1%86%D1%96-%D0%B3%D0%BE%D0%B4%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-%D0%BA%D1%83%D0%BC%D0%B5%D0%B4%D0%BD%D0%BE%D1%97-%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D0%BE%D1%97-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B8-%D0%B2%D0%BB%D0%B0%D1%81%D0%BD%D0%B8%D0%BA-gm1388809156-446328654",
};

export default function NoticesCategoryItem() {
const {_id, category, owner, avatar, location, dateOfBirth, sex, title} = item;

  return (
    <div>
<img src={avatar} alt={title}/>
<ul><li><SvgIcon id={"icon-location-1"}></SvgIcon>{location}</li>
<li><SvgIcon id={"icon-clock"}></SvgIcon>{dateOfBirth}</li>
<li><SvgIcon id={"icon-female"}>{sex}</SvgIcon></li>
</ul>
<h2>{title}</h2>
<span>{category}</span>
<button><SvgIcon id={"icon-heart"}></SvgIcon></button>

    </div>
  )
}
