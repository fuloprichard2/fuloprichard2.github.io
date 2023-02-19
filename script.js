let data =  {
    photo: '\images/sea_turtle.jpg',
    title: 'Turtle',
    description: 'Plastic has been found along virtually every coastline on the planet and throughout the seas, including its deepest and most remote regions.',
    };
let datafirst =  {
    photo: '\images/doctor_fish.jpg',
    title: 'Doctor fish',
    description: 'For more than a decade, scientists have warned that humankind is leaving so much plastic in the natural environment that future archaeologists will be able to mark this era by the synthetic waste that was left behind—in short, the Plastic Age.',
    };
let datasecond =  {
    photo: '\images/greek_tortoise.jpg',
    title: 'Greek toroise',
    description: 'Plastic in the ocean comes in myriad familiar forms, from shopping bags and takeout food containers to water bottles, toothbrushes, toys, bubble wrap, household appliances, and much more, the report noted.',
    };
let datathird =  {
    photo: '\images/white_shark.jpg',
    title: 'White shark',
    description: 'Plastic has been found along virtually every coastline on the planet and throughout the seas, including its deepest and most remote regions.',
    };
let datafourth =  {
    photo: '\images/clown_fish.jpg',
    title: 'Clown fish',
    description: 'Plastic has been found along virtually every coastline on the planet and throughout the seas, including its deepest and most remote regions.',
    };

let imagesData = [data,  datafirst, datasecond,  datathird, datafourth];
let currentPhoto = 0;

let loadPhoto = (currentPhoto) => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#title').html(imagesData[currentPhoto].title);
    $('#description').text(imagesData[currentPhoto].description);
}
$('#rightButton').click(() => {
    if (currentPhoto < 4) {
        currentPhoto +=1;
    }
    loadPhoto(currentPhoto);
    });
  
$('#leftButton').click(() => {
    if (currentPhoto > 0) {
        currentPhoto -=1;
    }
    loadPhoto(currentPhoto);
    });
loadPhoto(currentPhoto);

let dataNull =  {
    photot: '\images/sea_turtle.jpg',
    };
let dataOne =  {
    photot: '\images/doctor_fish.jpg',
    };
let dataTwo =  {
    photot: '\images/greek_tortoise.jpg',
    };
let dataThree =  {
    photot: '\images/white_shark.jpg',
    };
let dataFour =  {
    photot: '\images/clown_fish.jpg',
    };

let thumbnailArray = [dataNull, dataOne, dataTwo, dataThree, dataFour];


thumbnailArray.forEach((index, val) => {
    $('#thumbnailConatiner').click((event) => {
        let loadPhoto = $(event.target).attr('data-index');
       // let numberIndex = parseInt(loadPhoto);
    // now numberIndex is a number
    $('#textPicture').attr(imagesData[currentPhoto]);
  });
});
