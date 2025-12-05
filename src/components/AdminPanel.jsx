import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X, LogOut, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { ref, push, update, remove } from 'firebase/database';

const AdminPanel = ({ students }) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        photo: '',
        bio: '',
        skills: '',
        portfolioUrl: '',
        batch: ''
    });

    // Check authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            const msg = err?.code === 'auth/invalid-credential' || err?.code === 'auth/wrong-password'
                ? 'Invalid email or password'
                : 'Login failed. Please try again.';
            setError(msg);
            console.error(err);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const studentData = {
            ...formData,
            skills: formData.skills.split(',').map(s => s.trim())
        };

        try {
            if (isEditing) {
                const studentRef = ref(db, `students/${isEditing}`);
                await update(studentRef, studentData);
                setIsEditing(null);
            } else {
                const studentsRef = ref(db, 'students');
                await push(studentsRef, studentData);
            }
            setFormData({ name: '', photo: '', bio: '', skills: '', portfolioUrl: '', batch: '' });
        } catch (err) {
            console.error("Error saving data: ", err);
            alert("Error saving student data");
        }
    };

    const handleEdit = (student) => {
        setIsEditing(student.id);
        setFormData({
            ...student,
            skills: student.skills.join(', ')
        });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            try {
                const studentRef = ref(db, `students/${id}`);
                await remove(studentRef);
            } catch (err) {
                console.error("Error deleting data: ", err);
                alert("Error deleting student");
            }
        }
    };

    if (loading) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Loader className="animate-spin" size={32} color="var(--primary)" />
            </div>
        );
    }

    if (!user) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--light)'
            }}>
                <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', width: '100%', maxWidth: '400px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Admin Access</h2>
                    {error && <div style={{ color: 'var(--danger)', marginBottom: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} autoComplete="off">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-light)' }}
                            autoComplete="new-password"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-light)' }}
                            autoComplete="new-password"
                        />
                        <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                            Login
                        </button>

                        <Link to="/" style={{ textAlign: 'center', color: 'var(--primary)', fontSize: '0.9rem' }}>Back to Home</Link>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: 'var(--light)', padding: '2rem' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1>Admin Dashboard</h1>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/" className="btn btn-secondary">View Site</Link>
                        <button onClick={handleLogout} className="btn btn-danger">
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>

                <div className="admin-grid">
                    {/* Form */}
                    <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', height: 'fit-content' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>{isEditing ? 'Edit Student' : 'Add New Student'}</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                name="name"
                                placeholder="Student Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-light)' }}
                            />
                            <input
                                name="photo"
                                placeholder="Photo URL"
                                value={formData.photo}
                                onChange={handleInputChange}
                                style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-light)' }}
                            />
                            <textarea
                                name="bio"
                                placeholder="Short Bio"
                                value={formData.bio}
                                onChange={handleInputChange}
                                required
                                rows="3"
                                style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-light)', resize: 'vertical' }}
                            />
                            <input
                                name="skills"
                                placeholder="Skills (comma separated)"
                                value={formData.skills}
                                onChange={handleInputChange}
                                required
                                style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-light)' }}
                            />
                            <input
                                name="portfolioUrl"
                                placeholder="Portfolio Link"
                                value={formData.portfolioUrl}
                                onChange={handleInputChange}
                                required
                                style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-light)' }}
                            />
                            <input
                                name="batch"
                                placeholder="Batch Year"
                                value={formData.batch}
                                onChange={handleInputChange}
                                required
                                style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--gray-light)' }}
                            />

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                                    {isEditing ? <><Save size={16} /> Update</> : <><Plus size={16} /> Add Student</>}
                                </button>
                                {isEditing && (
                                    <button
                                        type="button"
                                        onClick={() => { setIsEditing(null); setFormData({ name: '', photo: '', bio: '', skills: '', portfolioUrl: '', batch: '' }); }}
                                        className="btn btn-outline"
                                    >
                                        <X size={16} /> Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* List */}
                    <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Current Students</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {students.map(student => (
                                <div key={student.id} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    background: 'white',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--gray-light)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <img src={student.photo || "https://ui-avatars.com/api/?name=" + encodeURIComponent(student.name) + "&background=random"} alt={student.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                                        <div>
                                            <h4 style={{ margin: 0 }}>{student.name}</h4>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--gray-medium)' }}>{student.batch}</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button onClick={() => handleEdit(student)} className="btn btn-outline" style={{ padding: '0.5rem' }}>
                                            <Edit2 size={16} />
                                        </button>
                                        <button onClick={() => handleDelete(student.id)} className="btn btn-outline" style={{ padding: '0.5rem', color: 'var(--danger)', borderColor: 'var(--danger)' }}>
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
