import React, {Component} from 'react';
import InfiniteScroll from '../redux/containers/InfiniteScroll';
import '../../stylesheets/less/main.less';

class Main extends Component{
    constructor(props){
        super(props);
        this.fullList = [
            {
                "_id": "59c713b7dcb175f456b4bd11",
                "title": "Dale",
                "picture": "https://placeimg.com/400/200/any/0"
            },
            {
                "_id": "59c713b7d936e87dd6d68d4c",
                "title": "Lindsey",
                "picture": "https://placeimg.com/400/200/any/1"
            },
            {
                "_id": "59c713b7536bfce2a5765a13",
                "title": "Evans",
                "picture": "https://placeimg.com/400/200/any/2"
            },
            {
                "_id": "59c713b728720bc80fa1683b",
                "title": "Robertson",
                "picture": "https://placeimg.com/400/200/any/3"
            },
            {
                "_id": "59c713b787931e86540a0923",
                "title": "Johnston",
                "picture": "https://placeimg.com/400/200/any/4"
            },
            {
                "_id": "59c713b7ae59cd27013ed36f",
                "title": "Catalina",
                "picture": "https://placeimg.com/400/200/any/5"
            },
            {
                "_id": "59c713b707d1f699febc85b5",
                "title": "Riddle",
                "picture": "https://placeimg.com/400/200/any/6"
            },
            {
                "_id": "59c713b7ace4ac1a4ea01ecc",
                "title": "Abbott",
                "picture": "https://placeimg.com/400/200/any/7"
            },
            {
                "_id": "59c713b761978c10369276fc",
                "title": "Mercado",
                "picture": "https://placeimg.com/400/200/any/8"
            },
            {
                "_id": "59c713b7c5a0c7f816cdf960",
                "title": "Janna",
                "picture": "https://placeimg.com/400/200/any/9"
            },
            {
                "_id": "59c713b79b4601f97372db86",
                "title": "Kasey",
                "picture": "https://placeimg.com/400/200/any/10"
            },
            {
                "_id": "59c713b7f089c20a18370171",
                "title": "Freda",
                "picture": "https://placeimg.com/400/200/any/11"
            },
            {
                "_id": "59c713b7b1ccaadb8591b1e6",
                "title": "Reynolds",
                "picture": "https://placeimg.com/400/200/any/12"
            },
            {
                "_id": "59c713b76b3dd72def937f48",
                "title": "Susana",
                "picture": "https://placeimg.com/400/200/any/13"
            },
            {
                "_id": "59c713b76b89b78219b1e77e",
                "title": "Keller",
                "picture": "https://placeimg.com/400/200/any/14"
            },
            {
                "_id": "59c713b7469068bbc841d067",
                "title": "Hodges",
                "picture": "https://placeimg.com/400/200/any/15"
            },
            {
                "_id": "59c713b70b3c6e685d4ff745",
                "title": "Sparks",
                "picture": "https://placeimg.com/400/200/any/16"
            },
            {
                "_id": "59c713b7d1291a06d984c319",
                "title": "Ina",
                "picture": "https://placeimg.com/400/200/any/17"
            },
            {
                "_id": "59c713b76943a5c511edfb54",
                "title": "Barbra",
                "picture": "https://placeimg.com/400/200/any/18"
            },
            {
                "_id": "59c713b7521ecd57008374c5",
                "title": "Haley",
                "picture": "https://placeimg.com/400/200/any/19"
            },
            {
                "_id": "59c713b7e5bc0c67e9f4357b",
                "title": "Lambert",
                "picture": "https://placeimg.com/400/200/any/20"
            },
            {
                "_id": "59c713b746de5d71052987b0",
                "title": "Robbins",
                "picture": "https://placeimg.com/400/200/any/21"
            },
            {
                "_id": "59c713b7a4ddc894010052ba",
                "title": "Louise",
                "picture": "https://placeimg.com/400/200/any/22"
            },
            {
                "_id": "59c713b7a28b05cda72cf1e9",
                "title": "Sue",
                "picture": "https://placeimg.com/400/200/any/23"
            },
            {
                "_id": "59c713b7b95231c2219cc907",
                "title": "Fisher",
                "picture": "https://placeimg.com/400/200/any/24"
            },
            {
                "_id": "59c713b748bcce2c8a1154f2",
                "title": "Deleon",
                "picture": "https://placeimg.com/400/200/any/25"
            },
            {
                "_id": "59c713b7d44fcc46306dabc4",
                "title": "Douglas",
                "picture": "https://placeimg.com/400/200/any/26"
            },
            {
                "_id": "59c713b716278696f1363b22",
                "title": "Tate",
                "picture": "https://placeimg.com/400/200/any/27"
            },
            {
                "_id": "59c713b742759e6b846b91cf",
                "title": "Bowman",
                "picture": "https://placeimg.com/400/200/any/28"
            },
            {
                "_id": "59c713b752b1acc080de7773",
                "title": "Murphy",
                "picture": "https://placeimg.com/400/200/any/29"
            },
            {
                "_id": "59c713b761ec97ab49002747",
                "title": "Navarro",
                "picture": "https://placeimg.com/400/200/any/30"
            },
            {
                "_id": "59c713b7761cd883ac62417d",
                "title": "Compton",
                "picture": "https://placeimg.com/400/200/any/31"
            },
            {
                "_id": "59c713b72bdf8236e39d9e15",
                "title": "Jarvis",
                "picture": "https://placeimg.com/400/200/any/32"
            },
            {
                "_id": "59c713b7439376d78e5761dd",
                "title": "Jessie",
                "picture": "https://placeimg.com/400/200/any/33"
            },
            {
                "_id": "59c713b76b15676570e24c8a",
                "title": "Bessie",
                "picture": "https://placeimg.com/400/200/any/34"
            },
            {
                "_id": "59c713b70048770a85772f7d",
                "title": "Vargas",
                "picture": "https://placeimg.com/400/200/any/35"
            },
            {
                "_id": "59c713b77bc48af25dc6aa5a",
                "title": "Staci",
                "picture": "https://placeimg.com/400/200/any/36"
            },
            {
                "_id": "59c713b776d90de6fcd3940a",
                "title": "Ballard",
                "picture": "https://placeimg.com/400/200/any/37"
            },
            {
                "_id": "59c713b728c616c0c34dda7d",
                "title": "Lavonne",
                "picture": "https://placeimg.com/400/200/any/38"
            },
            {
                "_id": "59c713b7bf50aa73c4e7f840",
                "title": "Hanson",
                "picture": "https://placeimg.com/400/200/any/39"
            },
            {
                "_id": "59c713b7f19d98f55acd2c69",
                "title": "Lamb",
                "picture": "https://placeimg.com/400/200/any/40"
            },
            {
                "_id": "59c713b7f7383b2760555d69",
                "title": "Lacy",
                "picture": "https://placeimg.com/400/200/any/41"
            },
            {
                "_id": "59c713b7a8acc65ab21e2a3a",
                "title": "Heather",
                "picture": "https://placeimg.com/400/200/any/42"
            },
            {
                "_id": "59c713b75a65ad551216e12a",
                "title": "Mason",
                "picture": "https://placeimg.com/400/200/any/43"
            },
            {
                "_id": "59c713b75c845d2341450c74",
                "title": "Addie",
                "picture": "https://placeimg.com/400/200/any/44"
            },
            {
                "_id": "59c713b7d35343fcff24bf29",
                "title": "Anderson",
                "picture": "https://placeimg.com/400/200/any/45"
            },
            {
                "_id": "59c713b716649fcfe51858bd",
                "title": "Gonzales",
                "picture": "https://placeimg.com/400/200/any/46"
            },
            {
                "_id": "59c713b74c663f7abaaab8ac",
                "title": "Rosie",
                "picture": "https://placeimg.com/400/200/any/47"
            },
            {
                "_id": "59c713b7bf520529a8094436",
                "title": "Dee",
                "picture": "https://placeimg.com/400/200/any/48"
            },
            {
                "_id": "59c713b77625fdfacbfc3c09",
                "title": "Latoya",
                "picture": "https://placeimg.com/400/200/any/49"
            },
            {
                "_id": "59c713b770410a33b05fc61f",
                "title": "Odom",
                "picture": "https://placeimg.com/400/200/any/50"
            },
            {
                "_id": "59c713b7b18615ed8328efd9",
                "title": "Britney",
                "picture": "https://placeimg.com/400/200/any/51"
            },
            {
                "_id": "59c713b7cf72bdd95af5b537",
                "title": "Gibbs",
                "picture": "https://placeimg.com/400/200/any/52"
            },
            {
                "_id": "59c713b728a2228f3c6feb27",
                "title": "Annette",
                "picture": "https://placeimg.com/400/200/any/53"
            },
            {
                "_id": "59c713b734d707d3a97620c1",
                "title": "Kitty",
                "picture": "https://placeimg.com/400/200/any/54"
            },
            {
                "_id": "59c713b7e4845cb42f052ba9",
                "title": "Parsons",
                "picture": "https://placeimg.com/400/200/any/55"
            },
            {
                "_id": "59c713b7bab60286b34ef3a6",
                "title": "Leila",
                "picture": "https://placeimg.com/400/200/any/56"
            },
            {
                "_id": "59c713b762bb3f0ac8450965",
                "title": "Charlene",
                "picture": "https://placeimg.com/400/200/any/57"
            },
            {
                "_id": "59c713b74e50f79ab872ba1a",
                "title": "Buckley",
                "picture": "https://placeimg.com/400/200/any/58"
            },
            {
                "_id": "59c713b755cb2dbdb0b52a60",
                "title": "Pat",
                "picture": "https://placeimg.com/400/200/any/59"
            },
            {
                "_id": "59c713b7058f8474dcfc669f",
                "title": "Lopez",
                "picture": "https://placeimg.com/400/200/any/60"
            },
            {
                "_id": "59c713b7f78e056e3ca13c4c",
                "title": "Ladonna",
                "picture": "https://placeimg.com/400/200/any/61"
            },
            {
                "_id": "59c713b7d23b28c3bd7b6aec",
                "title": "Payne",
                "picture": "https://placeimg.com/400/200/any/62"
            },
            {
                "_id": "59c713b72e79b839eda4fb20",
                "title": "Vincent",
                "picture": "https://placeimg.com/400/200/any/63"
            },
            {
                "_id": "59c713b7201000d6de2dac7b",
                "title": "Verna",
                "picture": "https://placeimg.com/400/200/any/64"
            },
            {
                "_id": "59c713b719791b10432f69cd",
                "title": "Angeline",
                "picture": "https://placeimg.com/400/200/any/65"
            },
            {
                "_id": "59c713b7836298de178ea8d1",
                "title": "Stein",
                "picture": "https://placeimg.com/400/200/any/66"
            },
            {
                "_id": "59c713b7b66daf3f74d459d5",
                "title": "Daphne",
                "picture": "https://placeimg.com/400/200/any/67"
            },
            {
                "_id": "59c713b733bc533dee25040b",
                "title": "Georgia",
                "picture": "https://placeimg.com/400/200/any/68"
            },
            {
                "_id": "59c713b7576d82529e95d981",
                "title": "Deanne",
                "picture": "https://placeimg.com/400/200/any/69"
            },
            {
                "_id": "59c713b74dc6e84fdde1566f",
                "title": "Judith",
                "picture": "https://placeimg.com/400/200/any/70"
            },
            {
                "_id": "59c713b72a179eed97ecd625",
                "title": "Tracy",
                "picture": "https://placeimg.com/400/200/any/71"
            },
            {
                "_id": "59c713b766748fcc019a9d96",
                "title": "Madeline",
                "picture": "https://placeimg.com/400/200/any/72"
            },
            {
                "_id": "59c713b72e2e4646faf3cdd3",
                "title": "Sophia",
                "picture": "https://placeimg.com/400/200/any/73"
            },
            {
                "_id": "59c713b7021371efe1e35c79",
                "title": "Ford",
                "picture": "https://placeimg.com/400/200/any/74"
            },
            {
                "_id": "59c713b763439ab6fcd57ec2",
                "title": "Yolanda",
                "picture": "https://placeimg.com/400/200/any/75"
            },
            {
                "_id": "59c713b7dad0f04491f8ecb8",
                "title": "Cummings",
                "picture": "https://placeimg.com/400/200/any/76"
            },
            {
                "_id": "59c713b79e99191ac332117e",
                "title": "Barrera",
                "picture": "https://placeimg.com/400/200/any/77"
            },
            {
                "_id": "59c713b7c7f235428c4c72dc",
                "title": "Cecilia",
                "picture": "https://placeimg.com/400/200/any/78"
            },
            {
                "_id": "59c713b7d8ae768f08421c1d",
                "title": "Maria",
                "picture": "https://placeimg.com/400/200/any/79"
            },
            {
                "_id": "59c713b71ff295a0ff60d53f",
                "title": "Christie",
                "picture": "https://placeimg.com/400/200/any/80"
            },
            {
                "_id": "59c713b7bdc531f78b9d4a30",
                "title": "Turner",
                "picture": "https://placeimg.com/400/200/any/81"
            },
            {
                "_id": "59c713b7f795c2e8724d8c81",
                "title": "Fuller",
                "picture": "https://placeimg.com/400/200/any/82"
            },
            {
                "_id": "59c713b7f54749264c831f65",
                "title": "Lila",
                "picture": "https://placeimg.com/400/200/any/83"
            },
            {
                "_id": "59c713b7a4667baada5f7813",
                "title": "Dunn",
                "picture": "https://placeimg.com/400/200/any/84"
            },
            {
                "_id": "59c713b79ca9480945b050f2",
                "title": "Marguerite",
                "picture": "https://placeimg.com/400/200/any/85"
            },
            {
                "_id": "59c713b7a101bedfa9de830f",
                "title": "Combs",
                "picture": "https://placeimg.com/400/200/any/86"
            },
            {
                "_id": "59c713b7e16213f5f19abd71",
                "title": "James",
                "picture": "https://placeimg.com/400/200/any/87"
            },
            {
                "_id": "59c713b78ae1014412e43e95",
                "title": "Roxanne",
                "picture": "https://placeimg.com/400/200/any/88"
            },
            {
                "_id": "59c713b7d544c8448b6acc94",
                "title": "Jeanine",
                "picture": "https://placeimg.com/400/200/any/89"
            },
            {
                "_id": "59c713b7eae2720f3acfff40",
                "title": "Kim",
                "picture": "https://placeimg.com/400/200/any/90"
            },
            {
                "_id": "59c713b756a1f176b8379c8b",
                "title": "Williamson",
                "picture": "https://placeimg.com/400/200/any/91"
            },
            {
                "_id": "59c713b7b4fe6ce5343ed92d",
                "title": "Gail",
                "picture": "https://placeimg.com/400/200/any/92"
            },
            {
                "_id": "59c713b73a47b710b1c97aee",
                "title": "Mccall",
                "picture": "https://placeimg.com/400/200/any/93"
            },
            {
                "_id": "59c713b715f5bedddc242480",
                "title": "Reilly",
                "picture": "https://placeimg.com/400/200/any/94"
            },
            {
                "_id": "59c713b77f461aee33fe793d",
                "title": "Cline",
                "picture": "https://placeimg.com/400/200/any/95"
            },
            {
                "_id": "59c713b72ddb32be9c508fe7",
                "title": "Nixon",
                "picture": "https://placeimg.com/400/200/any/96"
            },
            {
                "_id": "59c713b76b0042ee7e4396ce",
                "title": "Strong",
                "picture": "https://placeimg.com/400/200/any/97"
            },
            {
                "_id": "59c713b76876bf0efa1ec5d9",
                "title": "Cooley",
                "picture": "https://placeimg.com/400/200/any/98"
            },
            {
                "_id": "59c713b7daa5b383bc182897",
                "title": "Margery",
                "picture": "https://placeimg.com/400/200/any/99"
            }
        ];
    }

    render(){
        return(
           <InfiniteScroll items={this.fullList} showItemNumber={20}/>
        );
    }
}

export default Main;