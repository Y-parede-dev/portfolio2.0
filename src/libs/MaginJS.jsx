export class Techno {
    constructor(id, name, className, logo){
        this.id = id;
        this.name = name;
        this.className = className;
        this.logo = logo;
    }
}
export class Project {
    constructor(id, name, url, img, description, techno, code, site, codeUrl=null){
        this.id = id;
        this.name = name;
        this.url = url;
        this.img = img;
        this.description = description;
        this.techno = [techno];
        this.code = code;
        this.site = site;
        this.codeUrl = codeUrl;
    }
}