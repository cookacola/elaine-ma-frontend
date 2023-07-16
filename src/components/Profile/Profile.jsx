import ProfileBio from "./ProfileBio";
import ProfilePic from "./ProfilePic";

const Profile = async ({ isHome }) => {
	return (
		<div className="container relative flex flex-col items-center justify-center px-8 py-4 mx-auto my-24 md:flex-row md:gap-10">
			<ProfileBio isHome={isHome} />
			<ProfilePic />
		</div>
	);
};

export default Profile;
