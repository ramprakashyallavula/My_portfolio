export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="wrap footer-row">
                <a className="wordmark" href="#" aria-label="Back to top">rpy<span>.</span></a>
                <p>Ram Prakash Yallavula © {new Date().getFullYear()}</p>
                <ul className="footer-links" aria-label="Profiles and links">
                    <li><a href="https://github.com/ramprakashyallavula" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/ramprakash-yallavula/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:yallavularamprakash@gmail.com">Email</a></li>
                    <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a></li>
                    <li><a href="#">Back to top</a></li>
                </ul>
            </div>
        </footer>
    );
}
