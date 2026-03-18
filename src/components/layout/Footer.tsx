import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

const socialLinks = [
  { label: 'GitHub', url: '#' },
  { label: 'LinkedIn', url: '#' },
  { label: 'Twitter', url: '#' },
  { label: 'Email', url: 'mailto:hello@berny.dev' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            &copy; {currentYear} Berny. All rights reserved.
          </p>
          
          <div className={styles.social}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
