const Link = require('../model/Link')
const User = require('../model/User')


//-------------- get link-----------------------

const getLinks = async (req, res) => {

  console.log("inside getlink");


  try {

    const links = await Link.find({ user: req.user._id });
    console.log(links, "links");

    res.status(200).json(links);
  } catch (error) {

    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//---------------- create link---------------

const createLink = async (req, res) => {

  console.log("inside create link");

  const { title, url } = req.body;

  try {
    const link = new Link({
      title,
      url,
      user: req.user._id,
    });

    const createdLink = await link.save();
    console.log(createdLink);

    res.status(201).json(createdLink);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//--------------- delete link----------

const deleteLink = async (req, res) => {

  console.log("inside delete linnk");

  const { id } = req.params;
  console.log("id---", id);


  try {
    const link = await Link.findById(id);

    console.log("links---", link);

    if (!link) {
      return res.status(404).json({ message: 'Link not found' });
    }

    if (link.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized to delete this link' });
    }

    await Link.deleteOne({ _id: id });
    res.json({ message: 'Link removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};




//------------------  get your links -------------------


const getLinksByUsername = async (req, res) => {


  console.log("inside find by username");

  const { email } = req.params;

  console.log("email", email);


  try {
    // Find the user by username
    const user = await User.findOne({ email });

    console.log(user);


    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find links associated with the user

    console.log(user._id);

    const links = await Link.find({ user: user._id });

    res.json(links);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getLinks, createLink, deleteLink, getLinksByUsername };


