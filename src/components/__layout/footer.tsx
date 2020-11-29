import React from 'react';

interface AuthorLinkProps {
  author: string;
}

const AuthorLink = ({ author }: AuthorLinkProps) => {
  const link = `https://github.com/${author}`;
  return <a href={link}>{author}</a>;
};

interface FooterProps extends AuthorLinkProps {}

const Footer = ({ author }: FooterProps) => {
  return (
    <footer>
      {new Date().getFullYear()} | Made with &#10084; by
      {` `}
      <AuthorLink author={author} /> | Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  );
};

export default Footer;
