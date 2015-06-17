Meteor.startup(function () {

  if (Services.find({}).count() === 0) {
    Services.insert({
      title: 'ADA Training to Staff on Disability',
      description: 'Disability awareness training called ADAtude is provided in regular orientations for employees and other classes; i.e. employment, evacuation, and effective communication as requested.',
      phone: '512-974-3256'
    });
    Services.insert({
      title: 'Accident Report Form',
      description: 'If you are a ground transportation company and need to file an accident report, please click here to print out the form and return to the parking division by fax at (512)974-1560 or by mail to 1111 Rio Grande Street...',
      phone: '512-974-1563'
    });
    Services.insert({
      title: 'ADA Training to Staff on Disability',
      description: 'Disability awareness training called ADAtude is provided in regular orientations for employees and other classes; i.e. employment, evacuation, and effective communication as requested.',
      phone: '512-974-3256'
    });
    Services.insert({
      title: 'Accident Report Form',
      description: 'If you are a ground transportation company and need to file an accident report, please click here to print out the form and return to the parking division by fax at (512)974-1560 or by mail to 1111 Rio Grande Street...',
      phone: '512-974-1563'
    });
    Services.insert({
      title: 'ADA Training to Staff on Disability',
      description: 'Disability awareness training called ADAtude is provided in regular orientations for employees and other classes; i.e. employment, evacuation, and effective communication as requested.',
      phone: '512-974-3256'
    });
    Services.insert({
      title: 'Accident Report Form',
      description: 'If you are a ground transportation company and need to file an accident report, please click here to print out the form and return to the parking division by fax at (512)974-1560 or by mail to 1111 Rio Grande Street...',
      phone: '512-974-1563'
    });
    Services.insert({
      title: 'ADA Training to Staff on Disability',
      description: 'Disability awareness training called ADAtude is provided in regular orientations for employees and other classes; i.e. employment, evacuation, and effective communication as requested.',
      phone: '512-974-3256'
    });
    Services.insert({
      title: 'Accident Report Form',
      description: 'If you are a ground transportation company and need to file an accident report, please click here to print out the form and return to the parking division by fax at (512)974-1560 or by mail to 1111 Rio Grande Street...',
      phone: '512-974-1563'
    });
  }
  if (Headlines.find({}).count() === 0) {
    Headlines.insert({
      img: 'http://cheeze-blog-images.s3.amazonaws.com/sample-austin-family.png',
      title: 'Healthy Equity Summit:Closing the Gap for African Americans',
      body: 'Free community-wide event to address public health impacts.'
    });
    Headlines.insert({
      img: 'http://austintexas.gov/sites/default/files/TEDC_Award_Pic.jpg',
      title: 'City Recognized with Workforce Excellence Award',
      body: 'The award comes from the Texas Economic Development Council.'
    });
    Headlines.insert({
      img: 'http://austintexas.gov/sites/default/files/images/Animal_Services/RestorationChallenge2015.jpg',
      title: 'Dog trainers may apply for Canine Restoration Challenge',
      body: 'Competition involves training shelter dogs'
    });
  }

  if (Events.find({}).count() === 0) {
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
    Events.insert({
      date: 'Wednesday, June 17, 2015 - 8:30am',
      title: 'Bond Oversight Committee - Regular Meeting'
    });
  }
});
