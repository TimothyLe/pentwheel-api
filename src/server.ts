import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Welcome route
app.get('/api/splash', (req: Request, res: Response) => {
    res.json({
        message: 'Pentwheel',
        timestamp: new Date().toISOString()
    });
});

// Health check
app.get('/health', (req: Request, res: Response) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// Error handling
app.use((err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});