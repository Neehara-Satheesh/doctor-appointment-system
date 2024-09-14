$(document).ready(function() {
    // Doctors List
    const doctors = [
        { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', image: 'https://media.istockphoto.com/id/1340883379/photo/young-doctor-hospital-medical-medicine-health-care-clinic-office-portrait-glasses-man.jpg?s=612x612&w=0&k=20&c=_H4VUPBkS0gEj5ZdZzQo-Hw3lMuyofJpB-P9yS92Wyw=' },
        { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatologist', image: 'https://thumbs.dreamstime.com/b/portrait-happy-arabic-doctor-male-blue-background-square-smiling-to-camera-wearing-white-uniform-posing-headshot-cheerful-233544543.jpg' },
        { id: 3, name: 'Dr. Sam Green', specialty: 'Pediatrician', image: 'https://nyulangone.org/images/doctors/c/cohen/1831196526/jeffrey-m-cohen-square.jpg' },
        { id: 4, name: 'Dr. Emily Davis', specialty: 'Neurologist', image: 'https://thumbs.dreamstime.com/b/woman-doctor-2426012.jpg' },
        { id: 5, name: 'Dr. Michael Johnson', specialty: 'Orthopedic Surgeon', image: 'https://media.istockphoto.com/id/505571070/photo/confident-physician.jpg?s=2048x2048&w=is&k=20&c=L44Ss-lKTH6VTQjPMBwSPf66_MmGAbfJ6huFeMeIL4M=' },
        { id: 7, name: 'Dr. Daniel Brown', specialty: 'Ophthalmologist', image: 'https://media.istockphoto.com/id/173756513/photo/smiling-doctor.jpg?s=2048x2048&w=is&k=20&c=xS3ILkueH9PWIGt46dYKm9QEzp7OG8IWP2PB2PGlCqQ=' },
        { id: 8, name: 'Dr. Olivia Wilson', specialty: 'Psychiatrist', image: 'https://media.istockphoto.com/id/1182452091/photo/portrait-of-a-young-nurse-doctor.jpg?s=2048x2048&w=is&k=20&c=yjdr-JLEMty-3cb4QpW3NDoQZvzmNlgh7XDgwHkCmP4=' },
        { id: 9, name: 'Dr. James Clark', specialty: 'Gastroenterologist', image: 'https://media.istockphoto.com/id/1144353166/photo/portrait-of-a-gastroenterologist.jpg' },
        { id: 10, name: 'Dr. Sophia Martinez', specialty: 'Endocrinologist', image: 'https://image.shutterstock.com/image-photo/young-endocrinologist-office-260nw-1166627866.jpg' },
        { id: 11, name: 'Dr. William Taylor', specialty: 'Pulmonologist', image: 'https://image.shutterstock.com/image-photo/doctor-pulmonologist-hospital-260nw-1205924577.jpg' },
        { id: 12, name: 'Dr. Mia Anderson', specialty: 'Rheumatologist', image: 'https://media.istockphoto.com/id/1282797467/photo/portrait-of-a-rheumatologist.jpg' },
        { id: 13, name: 'Dr. Benjamin Thompson', specialty: 'Hematologist', image: 'https://images.unsplash.com/photo-1607378827274-06612b2cf009' },
        { id: 14, name: 'Dr. Ava Taylor', specialty: 'Nephrologist', image: 'https://image.shutterstock.com/image-photo/nephrologist-260nw-1056187236.jpg' },
        { id: 15, name: 'Dr. Lucas White', specialty: 'Urologist', image: 'https://image.shutterstock.com/image-photo/portrait-male-urologist-260nw-1772584010.jpg' },
        { id: 16, name: 'Dr. Isabella Harris', specialty: 'Infectious Disease Specialist', image: 'https://image.shutterstock.com/image-photo/infectious-disease-specialist-hospital-260nw-1827115563.jpg' },
        { id: 17, name: 'Dr. Ethan Lewis', specialty: 'Allergist', image: 'https://image.shutterstock.com/image-photo/allergist-260nw-1319487213.jpg' },
        { id: 18, name: 'Dr. Charlotte Young', specialty: 'Obstetrician', image: 'https://images.unsplash.com/photo-1615755865462-9e0d5c15d3d6' },
        { id: 19, name: 'Dr. Alexander Scott', specialty: 'Gynecologist', image: 'https://image.shutterstock.com/image-photo/portrait-female-gynecologist-office-260nw-1056901296.jpg' },
        { id: 20, name: 'Dr. Amelia King', specialty: 'Family Medicine', image: 'https://image.shutterstock.com/image-photo/family-medicine-260nw-1136463405.jpg' },
        { id: 21, name: 'Dr. Jacob Wright', specialty: 'Internal Medicine', image: 'https://images.unsplash.com/photo-1596796353742-dc9d5c4f8c82' },
        { id: 22, name: 'Dr. Evelyn Adams', specialty: 'Palliative Care', image: 'https://image.shutterstock.com/image-photo/doctor-palliative-care-hospital-260nw-1182065418.jpg' },
        { id: 23, name: 'Dr. Henry Baker', specialty: 'Anesthesiologist', image: 'https://image.shutterstock.com/image-photo/anesthesiologist-260nw-1042258756.jpg' },
        { id: 24, name: 'Dr. Ella Nelson', specialty: 'Emergency Medicine', image: 'https://media.istockphoto.com/id/1177246334/photo/portrait-of-emergency-medicine-doctor.jpg' },
        { id: 25, name: 'Dr. Jack Carter', specialty: 'Radiologist', image: 'https://image.shutterstock.com/image-photo/portrait-radiologist-260nw-1420970237.jpg' },
        { id: 26, name: 'Dr. Lily Murphy', specialty: 'Pathologist', image: 'https://image.shutterstock.com/image-photo/pathologist-260nw-1225720885.jpg' },
        { id: 27, name: 'Dr. Michael Gonzalez', specialty: 'Plastic Surgeon', image: 'https://media.istockphoto.com/id/1186797558/photo/portrait-of-a-plastic-surgeon.jpg' },
        { id: 28, name: 'Dr. Mia Williams', specialty: 'Otolaryngologist', image: 'https://image.shutterstock.com/image-photo/portrait-female-otolaryngologist-260nw-1041251048.jpg' },
        { id: 29, name: 'Dr. Daniel Harris', specialty: 'Sports Medicine', image: 'https://image.shutterstock.com/image-photo/sports-medicine-260nw-1407574588.jpg' },
        { id: 30, name: 'Dr. Harper Young', specialty: 'Medical Genetics', image: 'https://images.unsplash.com/photo-1578601461314-8e9f9b8d4c8d' }
    ];
    

    // Load Doctors in doctors.html
    if (window.location.pathname.includes('doctors.html')) {
        doctors.forEach(doctor => {
            $('#doctor-list').append(`
                <div class="col-md-4 mb-4">
                    <div class="card h-100 doctor-card shadow-sm">
                        <div class="row g-0">
                            <!-- Data on the left side -->
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${doctor.name}</h5>
                                    <p class="card-text">${doctor.specialty}</p>
                                    <a href="doctor-detail.html?id=${doctor.id}" class="btn btn-primary">View Details</a>
                                </div>
                            </div>
                            <!-- Image on the right side -->
                            <div class="col-md-4">
                                <img src="${doctor.image}" style="height:140px" class="rounded-end doctor-image"  alt="Doctor Image">
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // Populate specialty filter options
    const specialties = [...new Set(doctors.map(doc => doc.specialty))];
    specialties.forEach(specialty => {
        $('#specialty-filter').append(`<option value="${specialty}">${specialty}</option>`);
    });

    // Function to render doctors
    function renderDoctors(filteredDoctors) {
        $('#doctor-list').empty();
        filteredDoctors.forEach(doctor => {
            $('#doctor-list').append(`
                <div class="col-md-4 mb-4">
                    <div class="card h-100 doctor-card shadow-sm">
                        <div class="row g-0">
                            <!-- Data on the left side -->
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${doctor.name}</h5>
                                    <p class="card-text">${doctor.specialty}</p>
                                    <a href="doctor-detail.html?id=${doctor.id}" class="btn btn-primary">View Details</a>
                                </div>
                            </div>
                            <!-- Image on the right side -->
                            <div class="col-md-4">
                                <img src="${doctor.image}" style="height:140px" class="img-fluid rounded-end doctor-image" alt="Doctor Image">
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // Initial render
    renderDoctors(doctors);

    // Search and filter functionality
    $('#search-input').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        const selectedSpecialty = $('#specialty-filter').val();
        const filteredDoctors = doctors.filter(doctor => 
            doctor.name.toLowerCase().includes(searchTerm) &&
            (selectedSpecialty === "" || doctor.specialty === selectedSpecialty)
        );
        renderDoctors(filteredDoctors);
    });

    $('#specialty-filter').on('change', function() {
        const searchTerm = $('#search-input').val().toLowerCase();
        const selectedSpecialty = $(this).val();
        const filteredDoctors = doctors.filter(doctor => 
            doctor.name.toLowerCase().includes(searchTerm) &&
            (selectedSpecialty === "" || doctor.specialty === selectedSpecialty)
        );
        renderDoctors(filteredDoctors);
    });

    // Load Doctor Details in doctor-detail.html
    if (window.location.pathname.includes('doctor-detail.html')) {
        const params = new URLSearchParams(window.location.search);
        const doctorId = params.get('id');
        const doctor = doctors.find(d => d.id == doctorId);

        if (doctor) {
            $('#doctor-name').text(doctor.name);
            $('#doctor-specialty').text(doctor.specialty);
            $('#doctor-image').attr('src', doctor.image);
        }

        $('#book-appointment-btn').click(function() {
            $('#bookAppointmentModal').modal('show');
        });

        // Handle appointment form submission
        $('#appointment-form').submit(function(e) {
            e.preventDefault();

            // Capture the appointment details
            const appointmentDate = $('#appointment-date').val();
            const appointmentStartTime = $('#appointment-time').val();

            // Calculate the end time (45 minutes after the start time)
            const startTime = new Date(`${appointmentDate}T${appointmentStartTime}`);
            const endTime = new Date(startTime.getTime() + 45 * 60000); // Add 45 minutes

            const formattedEndTime = `${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`;

            // Save appointment details in localStorage
            const appointmentData = {
                doctorName: doctor.name,
                date: appointmentDate,
                startTime: appointmentStartTime,
                endTime: formattedEndTime,
                specialty: doctor.specialty
            };
            localStorage.setItem('appointment', JSON.stringify(appointmentData));

            // Redirect to confirmation page
            window.location.href = 'appointment-confirmation.html';
        });
    }

    // Load appointment confirmation in appointment-confirmation.html
    if (window.location.pathname.includes('appointment-confirmation.html')) {
        const appointment = JSON.parse(localStorage.getItem('appointment'));

        if (appointment) {
            $('#doctor-name').text(appointment.doctorName);
            $('#appointment-date').text(appointment.date);
            $('#appointment-time').text(`${appointment.startTime} - ${appointment.endTime}`);
            $('#doctor-specialty').text(appointment.specialty);
        }
    }
});
