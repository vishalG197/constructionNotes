const connectDB = async () => {
   try {
       await mongoose.connect(process.env.MONGO_URI, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           // Add other options as needed
       });
       console.log('Connected to MongoDB');
   } catch (error) {
       console.error('MongoDB Connection Error:', error);
       // Log additional information about the error
       console.log('Error details:', error.message, error.stack);
       // Further handling if needed
       throw error;
   }
};
