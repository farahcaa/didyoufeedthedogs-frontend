const Footer = () => {
  return (
    <div className="flex items-start border-t border-border">
      <div className="p-4 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Did You Feed The Dogs? All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
