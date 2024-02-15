import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
} from "flowbite-react";

const NavbarCom = () => {
  return (
    <div className="bg-orange-50">
        <Navbar fluid rounded className=" max-w-7xl mx-auto py-5 bg-orange-50 border-b">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-mono uppercase">
          Snap<span className="text-[#06B6D4]">Index</span>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
      <div className="hidden md:flex justify-center items-center gap-4">
        
          <input type="text" className="bg-transparent rounded-lg placeholder:font-mono"  placeholder="Search Here.." />
          <Button gradientDuoTone="cyanToBlue"  className="border-none">
            Search
          </Button>
      </div>
    </Navbar>
    </div>
  );
};

export default NavbarCom;
