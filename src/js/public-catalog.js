const defaultCatalog = [
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!T7YA4H86!pageimg",
    provider: "MPIWG 京都新造中華大國各省經界府州縣廰五湖四海及赤白道不差毫釐地輿全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!E3C2E6N0!pageimg",
    provider: "MPIWG Tabula Tartariae et majoris partis Regni Chinae"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!NHF76733!pageimg",
    provider: "MPIWG 山海關地輿全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!1D1Q3NAD!pageimg",
    provider: "MPIWG Sarmatia Utraque Europaea et Asiatica : Cum Privilegio ad Vicennium"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!PRSDMBXW!pageimg",
    provider: "MPIWG Il regno della China detto presentemente Catay, e Mangin, diuiso sopra le carte più esatte nelle sue principali prouincie"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!YDU9F4PD!pageimg",
    provider: "MPIWG Carte de l' Asie"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!T6Z038Q6!pageimg",
    provider: "MPIWG 標下裏河水師太湖右營新章汎境輿圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!MBE8NBTQ!pageimg",
    provider: "MPIWG 大清天下中華各省府州縣廳地理全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!SBE5SBT4!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 四川全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!6YCY8HA0!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 陝西全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!STY1GMVS!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 廣西全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!ZED86059!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 山東全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!N3710YVH!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 山西全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!TBAE2D6F!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 湖北全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!VHAEZ07A!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 盛京全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!7VRYMEYM!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 甘肅全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!VQ3R23Y7!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 直隷全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!D3TNAHP8!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 湖南全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!F3R1717X!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 河南全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!P13ANZWV!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 内外蒙古圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!E5W554ZQ!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 雲南全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!B0U4YYUW!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 西藏全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!7T194AUH!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 吉林圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!RU89NYAN!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 嘉峪關外鎮迪伊犁合圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!YKBKB1WT!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 貴州全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!MU952FCR!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 黑龍江所屬各城圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!VTDM1G88!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 浙江全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!P3Z38ZDF!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 安徽全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!Q3B43HBR!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 廣東全圖"
  },
  { manifestId: "https://digilib.mpiwg-berlin.mpg.de/digitallibrary/servlet/Manifester/IIIF/permanent!library!ZW781CK2!pageimg",
    provider: "MPIWG 大清一統與地全圖 : 嘉峪關外安西青海合圖"
  },
  { manifestId: "https://rmda.kulib.kyoto-u.ac.jp/iiif/metadata_manifest/RB00022876/manifest.json",
    provider: "京都大学 大明京省九邉外國府州縣路程圖"
  },
  { manifestId: "https://gist.githubusercontent.com/nungyao/4169c0f8d0d5977ae19f1b39487a3629/raw/d15e5000db5dc271af20588f9f5dd3c0890ec05d/manifest.json",
    provider: "QingMaps https://qingmaps.org"
  },
  { manifestId: "https://www.loc.gov/item/74650033/manifest.json",
    provider: "Library of Congress"
  }
]

export default defaultCatalog;
