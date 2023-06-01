import { Container } from "react-bootstrap";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function TimeLine() {
  return (
    <Container id="cd-timeline" className="cd-container">
        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
            </div>
            <div class="cd-timeline-content">
                <h2>Freelance Software Developer</h2>
                <div class="timeline-content-info">
                    <span class="timeline-content-info-title">
                        <i class="fa fa-certificate" aria-hidden="true"></i>
                        Software Developer
                    </span>
                    <span class="timeline-content-info-date">
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                        February 2023 - Present
                    </span>
                </div>
                <p>Building Ruby on Rails project and the occassional React on Rails.</p>
                <ul class="content-skills">
                    <li>Rails</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS3</li>
                </ul>
            </div>
        </div>

        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
            </div>
            <div class="cd-timeline-content">
                <h2>Switchbox Inc</h2>
                <span class="timeline-content-info-title">
                    Software Developer
                </span>
                <p>Worked alongside lead developer on green field project, architected the database, and implemented new features.</p>
                <ul class="content-skills">
                    <li>Rails</li>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>Docker</li>
                </ul>
                <span class="cd-date">2022</span>
            </div>
        </div>

        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
            </div>
            <div class="cd-timeline-content">
                <h2>Project Management Professional</h2>
                <p>Earned my PMP through the Project Management Institute.</p>
                <span class="cd-date">2022</span>
            </div>
        </div>

        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
            </div>
            <div class="cd-timeline-content">
                <h2>Radial Development Group</h2>
                <span class="timeline-content-info-title">
                    Software Developer
                </span>
                <p>Led a team of developer that implemented new features, updated out-of-date codebases, and integrated React with Rails.</p>
                <ul class="content-skills">
                    <li>Rails</li>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>SASS</li>
                    <li>TDD</li>
                    <li>Agile</li>
                </ul>
                <span class="cd-date">2021</span>
            </div>
        </div>

        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
            </div>
            <div class="cd-timeline-content">
                <h2>Flatiron</h2>
                <span class="timeline-content-info-title">
                    Software Developer Student
                </span>
                <p>Built full-stack projects in Ruby on Rails, exposed to React, Redux, and Node.</p>
                <ul class="content-skills">
                    <li>Ruby</li>
                    <li>Rails</li>
                    <li>SQLite</li>
                    <li>TDD</li>
                    <li>HTML</li>
                    <li>CSS3</li>
                </ul>
                <span class="cd-date">2020</span>
            </div>
        </div>

        <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
            </div>
            <div class="cd-timeline-content">
                <h2>Madwire</h2>
                <span class="timeline-content-info-title">
                    Project Manager/Web Developer
                </span>
                <p>Built Wordpress websites with custom ACF, built custom themes, and managed project end-to-end.</p>
                <ul class="content-skills">
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>WordPress</li>
                    <li>Project Management</li>
                </ul>
                <span class="cd-date">2012</span>
            </div>
        </div>
    </Container>

  );
}

export default TimeLine;
