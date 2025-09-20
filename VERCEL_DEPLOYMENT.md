# Vercel Deployment Guide for Vaulted Estates

This guide provides step-by-step instructions for deploying the Vaulted Estates application to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. GitHub repository access
3. Environment variables ready

## Step-by-Step Deployment

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click on "New Project" or "Add New..." → "Project"
3. Import your GitHub repository: `pepeonchain66/vaulted-estates`

### Step 2: Configure Project Settings

1. **Project Name**: `vaulted-estates` (or your preferred name)
2. **Framework Preset**: Select "Vite"
3. **Root Directory**: Leave as default (./)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. **Install Command**: `npm install`

### Step 3: Environment Variables

Add the following environment variables in Vercel dashboard:

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=your_rpc_url_here
VITE_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
VITE_INFURA_API_KEY=your_infura_api_key
VITE_CONTRACT_ADDRESS=your_deployed_contract_address
```

### Step 4: Advanced Configuration

The project includes a `vercel.json` file with optimized settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Step 5: Deploy

1. Click "Deploy" button
2. Wait for the build process to complete
3. Your application will be available at the provided Vercel URL

### Step 6: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS settings as instructed by Vercel
4. SSL certificate will be automatically provisioned

## Post-Deployment Configuration

### 1. Update Contract Addresses

After deploying your smart contracts, update the environment variables:

```
VITE_CONTRACT_ADDRESS=0x... (your deployed contract address)
```

### 2. Configure FHE Network

If using FHE encryption, add:

```
VITE_FHE_NETWORK_URL=your_fhe_network_url
VITE_FHE_PUBLIC_KEY=your_fhe_public_key
```

### 3. Analytics and Monitoring

Consider adding:
- Vercel Analytics
- Error tracking (Sentry)
- Performance monitoring

## Build Optimization

### Vite Configuration

The project includes optimized Vite configuration:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          wallet: ['@rainbow-me/rainbowkit', 'wagmi', 'viem'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  }
}))
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names (case-sensitive)
   - Restart deployment after adding variables

3. **Routing Issues**
   - Ensure `vercel.json` includes proper rewrites
   - Check that all routes are handled by React Router

### Performance Optimization

1. **Bundle Analysis**
   ```bash
   npm run build -- --analyze
   ```

2. **Image Optimization**
   - Use WebP format for images
   - Implement lazy loading
   - Optimize image sizes

3. **Code Splitting**
   - Implement dynamic imports
   - Use React.lazy() for route components

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive keys to repository
   - Use Vercel's environment variable system
   - Rotate keys regularly

2. **Headers**
   - Implement security headers
   - Use HTTPS only
   - Configure CORS properly

3. **Dependencies**
   - Keep dependencies updated
   - Audit for vulnerabilities
   - Use npm audit

## Monitoring and Maintenance

1. **Performance Monitoring**
   - Set up Vercel Analytics
   - Monitor Core Web Vitals
   - Track user experience metrics

2. **Error Tracking**
   - Implement error boundaries
   - Use error tracking services
   - Monitor application logs

3. **Regular Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Test deployments in staging

## Support

For issues with deployment:

1. Check Vercel documentation
2. Review build logs
3. Contact support if needed

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Deployment](https://reactrouter.com/en/main/routers/create-browser-router)